# Backbase Launchpad-CLI tools

Backbase Launchpad tools for widgets / modules 

# Information
| name                  | version       | node      |
| ----------------------|:-------------:| ----------:|
| backbase              | 0.2.6         | >= 0.10    |


## Requirements
- git
- nodejs
- bower
- curl

## Install

You can either install from NPM (stable) or install from Stash (experimental).

### Install From NPM

```
npm i backbase -g 
```

### Install From Stash

1. Ensure it's not already installed:

    `npm uninstall -g backbase`

2. Clone the repository from stash:

    `git clone ssh://git@stash.backbase.com:7999/lp/cli.git`

3. Install from repo:

    `cd cli && npm i . -g`

4. Link to local repo, so you can also update the CLI.

    `npm link`

## Usage

Using **bb** as binary.

**Warning. One of the dependent libraries *cliparse* doesn't support JavaScript I/O.**

### Generate widget/module:

arguments:
    - url 'https://stash.backbase.com/scm/lp/widget-ng-template.git'
options:
- **NONE**

```bash
bb generate <url>
```

### Install bower dependencies:
arguments:

- **&lt;package-name&gt;**

options:

- **NONE**

```bash
bb install
```


### Start local server: http://localhost:3000

arguments:

- **NONE**

options:

- **l --link** auto link dependencies (if they are already linked)
    

```bash
bb start
```

### Test: 
arguments:

- **NONE**

options:
- **w --watch** watch test files and source files

```bash
bb test
```


### Build: 

arguments:
    
- **NONE**

options:

- **- s --skipTests** skips unit tests

```bash
bb build
```


### Register: Register bower package to registry endpoint

arguments:

- **registry** - registry url default is http://launchpad.backbase.com:5678

options:
- **NONE**

```bash
bb register
```

### Unregister: Unregister bower package to registry endpoint
arguments:

- **registry** - registry url default is http://launchpad.backbase.com:5678

options:

- **NONE**

```bash
bb unregister
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
- bb docs (generate documentation)
- bb bump (bump the verion)
- bb package (generate a zip package from dist folder)

Output
- better output
- use debug flag

Test
- add tests


## Contributing
 tba
