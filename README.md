# Backbase Launchpad
=========

CLI development tool for widgets / modules

## Information

| Name       |  bb-lp-cli |
|------------|---|
| Bundle     | tools |
| Status     | node >=0.12.x < 5.0.x |


## Requirements

General

- git
- nodejs
- curl

Dev - Server

- python
- gcc / visual c++


## Install

```
npm i bb-lp-cli -g
```

## Usage

Using **bblp** as binary.


### Help

Check all the available commands that you can use.

```bash
bblp
```

or

```bash
bblp --help
```

Check command help

```bash
bblp <command> --help
```

### Generate

Clone a git repository template. Default is using `widget-ng-template`

arguments:
    - **template** Can be a git repository url or a local folder.
options:
- **-i --processImages** Process images by template engine. Images are excluded by default (they will be added to destination folder 'as it is').

```bash
bblp generate <template>
```

- default template is pointing to git@bitbucket.org:backbase/lpg-generator-widget-ng.git

### Start

Start local development brwserSync server on http://localhost:3000/.

arguments:

- **NONE**

options:

- **-a --apiVersion** Add version to server route from the raml version files. Default version is not included.
- **-p --port** Server port
- **-l --logLevel** Log level information info | silent
    - info is the default setting
    - silent will disable linting and notifications
    - debug/warn/ TODO
- **-d --deploy** Deploy item into a running portal (see bblp deploy).
- **-e --expand** Expand js, css assets (don't minify them)
- **-m --withModuleId** Build with AMD module ID in definition. Default **false**
- **--template** Template to use for standalone mode. `./index.dev.html` is the default. You can provide a custom path.

```bash
bblp start [-a] [-p3030] [-l silent] [--template cxp] [-i] [-e] [-m]
```

### Test:

Tests the widget / module using karma test runner and PhantomJS.

arguments:
- **NONE**

options:
- **-w --watch** Watch test files and source files
- **-c --coverage** With coverage
- **--browsers** A comma separated list of browsers to launch and capture
    + `--browsers Firefox,Chrome,Safari`
- **--config** Custom karma configuration file
    + `--config karma.config.js`
- **--moduleDirectories** A comma separated list of the shared components
    + `--moduleDirectories 'target/bower_components'`

```bash
bblp test
bblp test -c --browsers Firefox,Chrome --moduleDirectories '../../portal/myportal/statics/dist/itemRoot/static/features/[BBHOST]','target/bower_components'
```


### Build:
Bundle the widget/module.

arguments:

- **NONE**


options:

- **- f --fulltest** with unit tests and linting
- **- t --withTemplates** Bundle HTML templates into build file (for widgets)
- **- m --withModuleId** Build with AMD module ID in definition. Default **false**

- **- p --withPerformance** Build with performance annotations converted into performance module API calls
- **--moduleDirectories** A comma separated list of the shared components
    + `--moduleDirectories 'target/bower_components'`
- **--webpackconfig** Build with custom webpack config

```bash
bblp build
```

with moduleDirectories

```bash
bblp build --moduleDirectories '../../portal/myportal/statics/dist/itemRoot/static/features/[BBHOST]','target/bower_components'
```


**Compile & build styles:**

Some convention is required to compile styles files (less, scss, css). The name of the main file should be named as:
- **styles/base.less** (for less file)
- **styles/index.scss** (for scss file)
- **styles/index.css** (will be minified)


With custom configuration:

You can specify the [autoprefixer query configuration](https://github.com/ai/browserslist#queries)

```json
"autoprefixer": {
    "browsers": [
        "last 2 versions"
    ]
}
```

By default is "last 2 versions".

### Bump:
Bump version in package.json, model.xml, bower.json, README.md and CHANGELOG.md

**NOTE** if a version property is not found in **model.xml** file will be created

arguments:

- **VERSION**  Semver compliant major [X.x.x], minor [x.X.x] or patch [x.x.X]
- **[MESSAGE]**  Optional bump message
options:

- **--suffix** - Prerelease suffix name EX. .pre, .beta, .rc, **Default .pre**
- **--changelog** - CHANGELOG file name  **Default CHANGELOG.md**
- **--interactive** - Confirm next package version **Default true**

```bash
bblp bump minor [increment] "Some relevant message" [--interactive false]
```

### Docs:
Generating different types of documentation.


arguments:

- **NONE**

options:
- **--api** Generate API reference MarkDown in the **docs** folder. Based on [JSDoc](http://usejsdoc.org/) annotations. Default

- **--services** Generate reference MarkDown and HTML files in the **docs/services** folder. based on [RAML 0.8](https://github.com/raml-org/raml-spec/blob/master/raml-0.8.md) specifications. Optional you can pass the domain name.

Basic Usage:

```bash
bblp docs
```


```bash
bblp docs --services https://my.domain.com/services/rest
```


### Commit:
Use conventional commit messaged. Default will run git commit.

arguments:
- **NONE**

options:
- **NONE**

```bash
bblp commit
```

How to add your commit convention adapter.

```bash
npm i cz-conventional-changelog -D
```

... configure it after inside the `package.json`

```json
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```


### Register:
Register package to launchpad registry endpoints
bower - http://launchpad.backbase.com:5678
npm - http://launchpad.backbase.com:8765

arguments:

- **manager** npm or bower. Default to bower.

options:
- **--registry** Custom registry endpoint

```bash
bblp register [npm]
```

### Unregister:
Unregister package to launchpad registry endpoints

arguments:

- **manager** npm or bower. Default to bower.

options:
- **--registry** Custom registry endpoint
- **- f --force** - 'use the force' npm functionality.

```bash
bblp unregister [npm] [-f]
```

### Theme Build

Builds a theme.
Requires a bower.json file in the directory with a "main" pointing to the base less file

```bash
bblp theme build
```

arguments:

- **entry** Path to directory to build.
- **collection** Pass collection variable to less.

options:

- **base-path** Pass base-path var to less.
- **sourcemaps** Whether to generate source maps.
- **w, watch** Watch less files and rebuild on change.
- **disable-compress** Don't compress CSS into .min files.
- **disable-ie** Don't create reworked .ie files for IE8.
- **disable-assets** Don't collect font/image assets.
- **d, deploy** Run bblp deploy after building.

```bash
bblp theme build retail [-w --disable-compress -d]
```

### Deploy:

Deploy a package into a running portal.

```bash
bblp deploy [--all]
```

options:
- **--all** Deploy all bower & npm dependencies before deploying local package.

The config for connecting to the portal is obtained by merging multiple configuration files by
this order of importance:

Local .bbrc files upwards the directory tree
All .bbrc files upwards the directory tree
.bbrc file located in user's home folder (~)

The default config is:

```json
{
  "scheme": "http",
  "host": "localhost",
  "port": "7777",
  "context": "portalserver",
  "username": "admin",
  "password": "admin"
}
```

When used through `bblp start -d` it will initially deploy all packages (including bower and
npm dependencies), then watch just the local package and re-deploy on any changes.


### Configuration under the bower.json or package.json file

This is the default config structure if is not specified otherwise in **bower.json** file


```javascript
"config": {
    "paths" : {
        "scripts": "./scripts",
        "docs": "./docs",
        "target": "./dist",
        "templates": "./templates",
        "styles": "./styles",
        "test": "./test",
        "reports": "./reports",
        "index": "./index-dev.html"
    },
    "data": {
        "route": "", // url access to the mock raml api
        "files": [
            './**/raml/**/*.raml',
            './**/services/**/*.raml'
        ]
    },
    "proxies": {

    },

    "eslint": "configs/eslint.conf.yaml",
    "karma": "configs/karma.conf.yaml"
    ....
}
```


### Extending configurations:
By default the cli is looking for an **configs** folder in the root folder of the app. Possible extensions are on **karma** options:

Example karma.conf.yaml

```yaml
# Karma Configuration Options
default:
  browsers:
    - Chrome

production:
    browsers:
        - Firefox
        - Chrome

```

Example eslint.conf.yaml

```yaml
---
  rules:
    eqeqeq: 0
    curly: 2
    quotes:
      - 2
      - "double"

```

```bash
NODE_ENV=production bblp test -c
```

YAML configuration is preferred format but you can also opt for a `.json` format.

The same is possible also for **eslint** options:


**IMPORTANT TO NOTE** the file name needs to be `karma.conf.yaml` and `eslint.conf.yaml`. If you prefer a different name then you can set it up in the `bower.json config`

```json
...
"karma": "configs/karma.configuration.yaml"
...
```


@todo
- add the webpack extension support

## Develop & Contributing

Clone and link the repository

```bash
git clone git@github.com:Backbase/bb-lp-cli.git && cd bb-lp-cli && npm link
```

Use the develop branch

```bash
npm install backbase/bb-lp-cli#develop
```


Publish a beta version

```base
git tag x.x.x-beta.0
git tag push --tags
npm login
npm publish --tags beta
npm info
```

## FAQ

Q. How can i disable some folders, file, or rules from being linted?
A. They are two options: Global and Inline.

    1. Global: use a `.eslintignore` file in the root of the project and specify that to ignore, for ex:

    ```
    # Ignore scripts but not the main file
    scripts/
    !scripts/main.js
    ```

    2. Inline: using a comment inside of your JavaScript file, use the following format
    /*eslint-disable */



## HOWTO

- Windows
### Adding environments paths for python
http://stackoverflow.com/questions/3701646/how-to-add-to-the-pythonpath-in-windows-7

## Tested

MacOS
- node: 0.12.x, 4.x
- npm: 2.x 3.x

Win7
- node: 0.12.x, 4.x
- npm: 2.14.x

### Important Notes
The cli uses [node-gyp](https://github.com/nodejs/node-gyp)

You will also need to install:

  * On Unix:
    * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported)
    * `make`
    * A proper C/C++ compiler toolchain, like [GCC](https://gcc.gnu.org)
  * On Mac OS X:
    * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported) (already installed on Mac OS X)
    * [Xcode](https://developer.apple.com/xcode/downloads/)
      * You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences -> Downloads`
      * This step will install `gcc` and the related toolchain containing `make`

  * On Windows:
    * [Python][windows-python] ([`v2.7.3`][windows-python-v2.7.3] recommended, `v3.x.x` is __*not*__ supported)
      * Make sure that you have a PYTHON environment variable, and it is set to drive:\path\to\python.exe not to a folder (Append ;C:\Python27 to the Path variable.)
      http://stackoverflow.com/questions/3701646/how-to-add-to-the-pythonpath-in-windows-7

    * Windows XP/Vista/7:
      * Microsoft Visual Studio C++ 2013 ([Express][msvc2013] version works well)
        * If the install fails, try uninstalling any C++ 2010 x64&x86 Redistributable that you have installed first
        * If you get errors that the 64-bit compilers are not installed you may also need the [compiler update for the Windows SDK 7.1]
    * Windows 7/8:
      * Microsoft Visual Studio C++ 2013 for Windows Desktop ([Express][msvc2013] version works well)
    * All Windows Versions
      * For 64-bit builds of node and native modules you will _**also**_ need the [Windows 7 64-bit SDK][win7sdk]
      * You may need to run one of the following commands if your build complains about WindowsSDKDir not being set, and you are sure you have already installed the SDK:

```
call "C:\Program Files\Microsoft SDKs\Windows\v7.1\bin\Setenv.cmd" /Release /x86
call "C:\Program Files\Microsoft SDKs\Windows\v7.1\bin\Setenv.cmd" /Release /x64
```

If you have multiple Python versions installed, you can identify which Python
version `node-gyp` uses by setting the '--python' variable:

``` bash
$ node-gyp --python /path/to/python2.7
```

If `node-gyp` is called by way of `npm` *and* you have multiple versions of
Python installed, then you can set `npm`'s 'python' config key to the appropriate
value:

``` bash
$ npm config set python /path/to/executable/python2.7
```

Note that OS X is just a flavour of Unix and so needs `python`, `make`, and C/C++.
An easy way to obtain these is to install XCode from Apple,
and then use it to install the command line tools (under Preferences -> Downloads).

Check [node-gyp](https://github.com/nodejs/node-gyp) project for more info.


### root/Administrator error

https://docs.npmjs.com/getting-started/fixing-npm-permissions

- Please try running this command again as root/Administrator

> npm ERR! Please try running this command again as root/Administrator.

It turns out that you don’t have to run the command again as Administrator, and doing so won’t fix the problem.  Try npm cache clean first.  If that doesn’t fix things, take a look in %APPDATA%\npm-cache, or if you’re using PowerShell, $env:APPDATA\npm-cache.  After cleaning the cache, you may still be left with remnants.  Manually remove everything in that directory, and try again.  

[windows-python]: http://www.python.org/getit/windows
[windows-python-v2.7.3]: http://www.python.org/download/releases/2.7.3#download
[msvc2013]: http://www.microsoft.com/en-gb/download/details.aspx?id=44914
[win7sdk]: http://www.microsoft.com/en-us/download/details.aspx?id=8279
