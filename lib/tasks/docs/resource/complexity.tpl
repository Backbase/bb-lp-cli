`<%= ploc %>`: Physical lines of js code for the project.
`<%= lloc %>`: Logical lines of js  code for the project.
`<%= modules.length %>`: The number of modules inside the project. ```<%= modules.toString() %>```
`<%= dependencies.length %>`: The number of dependencies for the project. ```<%= dependencies.toString() %>```
`<%= dependencies.length > 5 ? 'Yes' : 'No' %>`: Portability:Critical level of the number of dependencies for the project.
`<%= loc.toFixed(2) %>`: The average per-function count of logical lines of code.
`<%= cyclomatic.toFixed(2) %>`: The average per-function cyclomatic complexity.
`<%= effort.toFixed(2) %>`: The average per-function Halstead effort.
`<%= params.toFixed(2) %>`: The average per-function parameter count.
`<%= maintainability.toFixed(2) %>`: The average per-module maintainability index.