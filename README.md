# BackBase-CLI 

Backbase tool for widgets / modules


#Information
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

