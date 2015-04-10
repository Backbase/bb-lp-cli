# Backbase Launchpad-CLI tools

Backbase Launchpad tools for widgets / modules 

# Information
| name                  | version       | node      |
| ----------------------|:-------------:| ----------:|
| bb-lp-tools           | 0.0.1         | >= 0.10    |


## Requirements
- git
- nodejs
- bower
- curl

## Install

```
npm i bb-lp-tools -g 
```

## Usage

Using **bb-lp** as binary.


### Generate widget/module:

arguments:
    - url 'https://stash.backbase.com/scm/lp/widget-ng-template.git'
options:
- **NONE**

```bash
bb-lp generate <url>
```

### Install bower dependencies:
arguments:

- **&lt;package-name&gt;**

options:

- **NONE**

```bash
bb-lp install
```


### Start local server: http://localhost:3000

arguments:

- **NONE**

options:

- **l --link** auto link dependencies (if they are already linked)
    

```bash
bb-lp start
```

### Test: 
arguments:

- **NONE**

options:
- **w --watch** watch test files and source files

```bash
bb-lp test
```


### Build: 

arguments:
    
- **NONE**

options:

- **- s --skipTests** skips unit tests

```bash
bb-lp build
```


### Register: Register bower package to registry endpoint

arguments:

- **registry** - registry url default is http://launchpad.backbase.com:5678

options:
- **NONE**

```bash
bb-lp register
```

### Unregister: Unregister bower package to registry endpoint
arguments:

- **registry** - registry url default is http://launchpad.backbase.com:5678

options:

- **NONE**

```bash
bb-lp unregister
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


## TODO:


Commands
- bb-lp docs (generate documentation)
- bb-lp import (import to portal)
- bb-lp bump (bump the verion)
- bb-lp package (generate a zip package from dist folder)

Output
- better output
- use debug flag

Test
- add tests


## Contributing
 tba
