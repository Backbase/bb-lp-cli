# BackBase-CLI 

Backbase tool for widgets / modules

# Information
| name                  | version       | node      |
| ----------------------|:-------------:| ----------:|
| backbase              | 0.0.1         | >= 0.10    |


## Requirements
- git
- nodejs
- bower

## Install

```
npm i backbase -g 
```

## Usage

### Generate widget/module:

arguments:
    - url 'https://stash.backbase.com/scm/lp/widget-ng-template.git'
options:
    NONE

```bash
backbase generate <url>
```

### Install bower dependencies:
arguments:
    NONE
options:
    - v  'Verbose'

```bash
backbase install
```


### Start local server: http://localhost:3000

arguments:
    NONE
options:
    NONE
    
```bash
backbase start
```

### Test: 
arguments:
    NONE
options:
    - w watch

```bash
backbase test
```


### Configuration under the bower.json file
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


### TODO:
--------

Commands
- bb link (bower link specific modules)
- bb docs (generate documentation)
- bb import (import to portal)
- bb bump (bump the verion)
- bb package (generate a zip package from dist folder)
