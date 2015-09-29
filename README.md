# Backbase Launchpad
=========

CLI development tool for widgets / modules 

# Information
| name                  | version       | node      |
| ----------------------|:-------------:| ----------:|
| bb-lp-cli             | 1.0.0-beta.1   | >= 0.10    |


## Requirements
- git
- nodejs
- bower
- curl
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
    - url 'https://stash.backbase.com/scm/lp/widget-ng-template.git'
options:
- **NONE**

```bash
bblp generate <url>
```


### Start

Start local development brwserSync server on http://localhost:3000/.

arguments:

- **NONE**

options:

- **NONE**
    

```bash
bblp start
```

### Test: 

Tests the widget / module using karma test runner and PhantomJS.

arguments:
- **NONE**

options:
- **-w --watch** Watch test files and source files

```bash
bblp test
```


### Build: 
Bundle the widget/module.

arguments:
    
- **NONE**

options:

- **-s --skipTests** Skips unit tests
- **-t --withTemplates** Bundle HTML templates into build file (for widgets)

```bash
bblp build
```


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



### Configuration under the bower.json file

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
        "index": "./index-dev.html"
    },

    "proxies": {
      "/api":  "http://localhost:3030/"      
    }
    ....    
}
```


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

## HOWTO

- Windows
### Adding environments paths for python
http://stackoverflow.com/questions/3701646/how-to-add-to-the-pythonpath-in-windows-7

## Tested

MacOS
- node: 0.12.x, 4.0.0
- npm: 2.x 3.x

Win7
node: 0.12.x, 4.1.x
npm: 2.14.x

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
