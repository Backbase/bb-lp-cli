# Backbase Launchpad
=========
CLI development tool for widgets / modules 

# Information
| name                  | version       | node      |
| ----------------------|:-------------:| ----------:|
| bb-lp-cli             | 1.0.0-alpha   | >= 0.10    |


## Requirements
- git
- nodejs
- bower
- curl

## Install

```
npm i @backbase/bb-lp-cli -g 
```

## Usage

Using **bblp** as binary.


### Help command

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

### Generate widget/module:

Clone a git repository template. Default is using `widget-ng-template`

arguments:
    - url 'https://stash.backbase.com/scm/lp/widget-ng-template.git'
options:
- **NONE**

```bash
bblp generate <url>
```


### Start local server: http://localhost:3000

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

Pull requests
@tba

## FAQ
@tba

## Tested

MacOS
- node: 0.12.x, 4.0.0
- npm: 2.x 3.x
