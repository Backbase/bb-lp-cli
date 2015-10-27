var shell = require('shelljs');
var path = require('path');
var Client = require('stash-rest-api').Client;
var utils = require('./utils');

module.exports = function(stashURL) {
    'use strict';

    var _client = null;
    stashURL = stashURL || 'http://stash.backbase.com/rest/api/1.0/';

    function createConnection(credentials) {
        return _client = new Client(stashURL, credentials.login, credentials.password);
    }

    function getReposListByKey(projectKey) {
        return _client.repos.get(projectKey);
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
            return _client.projects.get();
        },
        // returns promise
        cloneReposFromProject: function(project) {
            return getReposListByKey(project.target.key)
            .then(function cloneReposList(reposList) {
                project.repos = reposList.values;
                (reposList.values || []).forEach(function clone(repo) {
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
