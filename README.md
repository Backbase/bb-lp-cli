# Backbase Launchpad
=========

CLI development tool for widgets / modules

## Information

| Name       |  bb-lp-cli |
|------------|---|
| Version    | 1.4.0   |
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
    - url 'https://stash.backbase.com/scm/lpg/generator-widget-ng.git'
options:
- **-i --processImages** Process images by template engine. Images are excluded by default (they will be added to destination folder 'as it is').

```bash
bblp generate <url>
```


### Start

Start local development brwserSync server on http://localhost:3000/.

arguments:

- **NONE**

options:

- **-p --port** Server port


```bash
bblp start [-p3030]
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

Arguments:

- **config** path to config file for components management. E.g. `bblp build -c ./my-conf.json`.
If config contains entryPoint and excludes whey are going to be used instead of corresponding arguments. Here is the config example for UI module:

```javascript
{
    "entryPoint": "./scripts/custom-ui.js",
    "excludes": [
        "input-overflow",
        "touch",
        "amount",
        "list",
        "field",
        "responsive",
        "wizard",
        "timer",
        "switcher",
        "card",
        "modal-dialog",
        "scrolling-hook",
        "smartsuggest",
        "placeholder",
        "infinite-scroll",
        "element-resize"
    ]

}
```

- **excludes** Array of components to exclude. Please note, that if custom entry point isn't specified current main is used.
Usage example: `bblp build -x touch,color-picker,focus`.
- **entryPoint** name of entry point file. It is used to create custom entry point due to the excludes array and corresponding dest file.
Usage example: `bblp build -ex touch,color-picker,focus ./scripts/my-custom-dist-file.js`.

Options:

- **- f --fulltest** with unit tests and linting
- **- t --withTemplates** Bundle HTML templates into build file (for widgets)
- **- m --withModuleId** Build with AMD module ID in definition
- **- c --withConfig** Build with config using path from arguments
- **- e --withCustomEntry** Build using specified custom entry point (works with excludes)
- **- x --withExcludes** Exclude components from main file due to specified as an argument excludes array
- **- p --withPerformance** Build with performance annotations converted into performance module API calls
- **--moduleDirectories** A comma separated list of the shared components
    + `--moduleDirectories 'target/bower_components'`

```bash
bblp build
```

with moduleDirectories

```bash
bblp build --moduleDirectories '../../portal/myportal/statics/dist/itemRoot/static/features/[BBHOST]','target/bower_components'
```


**Compile styles:**
Some convention is required to compile styles files (less, scss). The name of the main file should be named as:
- **styles/base.less** (for less file)
- **styles/index.scss** (for scss file)


### Custom build

```bash
bblp custom-build <config>
```

options:

- **- t --withTemplates** Bundle HTML templates into build file (for widgets)
- **- u --useUnminified** Build with unminified scripts
- **- v --useDist** Flag to turn on/off webpack output
- **- p --withPerformance** Build with performance annotations converted into performance module API calls

Description:

Custom build is aimed at reducing number of scripts on a page. It combines several widgets and their dependencies into a single bundle using configuration. As a result you'll get the bundle and custom requirejs config which defines paths to concatenated widgets and dependencies.

Arguments:

- **config** - path to config file for components customization

Here is the config example:

```javascript
{
    "dist": "./bundles",
    "base": "launchpad",
    "componentBase": "bower_components",
    "componentMain": "scripts/main.js",
    "componentDistModule": "dist/scripts/main",
    "bundles": {
        "login-page": {
            "widgets": [
                "widget-login-multifactor-engage",
                "widget-device-dna"
            ],
            "customComponents": {
                "ui": {
                    "excludes": [
                        "input-overflow",
                        "touch",
                        "amount",
                        "list",
                        "field",
                        "responsive",
                        "wizard",
                        "timer",
                        "switcher",
                        "card",
                        "aria",
                        "number-input",
                        "nav-icon",
                        "modal-dialog",
                        "scrolling-hook",
                        "smartsuggest",
                        "placeholder",
                        "color-picker",
                        "infinite-scroll",
                        "element-resize"
                    ]
                }
            }
        }
    },
    "externals": ["angular", {"name": "jquery", "value": "jQuery"}],
    "bundlesConfigPath": "./config/bundles-conf.js"
}
```

Config description:

 - `config.dist` (String) - path to bundles destination folder;
 - `config.componentBase` (String) - path to used components;
 - `config.componentMain` (String) - path to main script file;
 - `config.componentDistModule` (String) - path to destination main file;
 - `config.bundles` (Object) - set of bundles configuration;
 - `config.bundle[NAME]` (String) NAME is a bundle identifier wich is used to create chunk;
 - `config.bundle[NAME].widgets` (Array) - array of widget names which are going to be used as an entry points;
 - `config.bundle[NAME].customComponents` (Object) - set of customised components;
 - `config.bundle[NAME].customComponents[CNAME]` (String) CNAME is a name of customised component;
 - `config.bundle[NAME].customComponents[CNAME].excludes` (Array) - Array of components to exclude;
 - `config.externals` (Array) - exterlan libraries array. Values can be both "String" and {"name": "libName", "value": "libGlobalName"} objects. If value is a String - module name is going to be used as a global name for the dependency, overwise passed value is going to be used;
 - `config.bundlesConfigPath` (String) - path to require config output.


### Bump:
Bump version in bower.json, README.md and CHANGELOG.md

arguments:

- **VERSION**  Semver compliant major [X.x.x], minor [x.X.x] or patch [x.x.X]
- **[MESSAGE]**  Optional bump message
options:

- **NONE**

```bash
bblp bump minor "Some relevant message"
```

### Register:
Register bower package to registry endpoint

arguments:

- **registry** - registry url default is http://launchpad.backbase.com:5678

options:
- **NONE**

```bash
bblp register
```

### Unregister:
Unregister bower package to registry endpoint

arguments:

- **registry** - registry url default is http://launchpad.backbase.com:5678

options:

- **NONE**

```bash
bblp unregister
```



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
        "route": "/services/mock", // url access to the mock raml api
        "files": ['./**/data/**/*.raml'] // .raml
    },
    "proxies": {
      "/api":  "http://localhost:3030/"
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
- node: 0.12.x, 4.0.0
- npm: 2.x 3.x

Win7
- node: 0.12.x, 4.1.x
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


[windows-python]: http://www.python.org/getit/windows
[windows-python-v2.7.3]: http://www.python.org/download/releases/2.7.3#download
[msvc2013]: http://www.microsoft.com/en-gb/download/details.aspx?id=44914
[win7sdk]: http://www.microsoft.com/en-us/download/details.aspx?id=8279
