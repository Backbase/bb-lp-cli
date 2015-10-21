var shell = require('shelljs');
var path = require('path');
var Stash = require('nodejs-stash-client');
var utils = require('./utils');

module.exports = function(stashURL) {
    'use strict';

    var _client = null;
    stashURL = stashURL || 'https://stash.backbase.com';

    function createConnection(credentials) {
        return _client = new Stash({
            url: stashURL,
            credentials: [credentials.login, credentials.password].join(':')
        });
    }

    function getReposListByKey(projectKey) {
        return _client.Project(projectKey).getRepoList();
    }

    function cloneRepo(args) {
        return shell.exec(['git clone', args.cloneUrl, args.target].join(' '));
    }

    function getCloneLink(item, protocol) {
        protocol = protocol || 'ssh';
        return utils.find(item.links.clone, function(link) {
            return link.name && link.name === protocol;
        }).href;
    }

    return {
        // returns promise
        connect: function(credentials) {
            return _client ? _client : createConnection(credentials || {});
        },
        // returns promise
        getProjectsList: function() {
            return _client.getProjectList();
        },
        // returns promise
        cloneReposFromProject: function(project) {
            return getReposListByKey(project.target.key)
            .then(function cloneReposList(reposList) {
                project.repos = reposList;
                (reposList || []).forEach(function clone(repo) {
                    cloneRepo({
                        cloneUrl: getCloneLink(repo, 'ssh'),
                        target: path.join(project.folder, repo.slug)
                    });
                });
                return project;
            });
        }
    }
};
