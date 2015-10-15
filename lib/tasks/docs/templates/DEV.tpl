# Widget Checklist

## Code

### JavaScript

- `<%= javascript.length %>`: Length of dist/build/main.js source (in bytes).
- `<%= javascript.ploc %>`: Physical lines for the project.
- `<%= javascript.lloc %>`: Logical lines for the project.
- `<%= javascript.modules.length %>`: The number of project's JavaScript modules. <% _.forEach(javascript.modules, function(module) { %>
	- <%- module %> <% }); %>
- <%= category({ value: javascript.dependencies.length, good: 3, bad: 6, text: javascript.dependencies.length + ': The number of dependencies for the project.' }) %><% _.forEach(javascript.dependencies, function(dependency) { %>
	- <%- dependency %> <% }); %>

##### Complexity

- `<%= javascript.loc.toFixed(2) %>`: The average per-function count of logical lines of code.
- `<%= javascript.cyclomatic.toFixed(2) %>`: The average per-function cyclomatic complexity.
- `<%= javascript.effort.toFixed(2) %>`: The average per-function Halstead effort.
- `<%= javascript.params.toFixed(2) %>`: The average per-function parameter count.
- `<%= javascript.maintainability.toFixed(2) %>`: The average per-module maintainability index.

### CSS

- `<%= css.metrics.length %>`: length of CSS source (in bytes)
- `<%= extensibility.styles.length %>`: The number of project's CSS modules. <% _.forEach(extensibility.styles, function(module) { %>
	- <%- module %> <% }); %>
- `<%= css.metrics.selectors %>`: number of selectors (e.g. .foo, .bar { color: red } is counted as two selectors - .foo and .bar)
- `<%= css.metrics.rules %>`: number of rules (e.g. .foo, .bar { color: red } is counted as one rule)
- `<%= css.metrics.declarations %>`: number of declarations (e.g. .foo, .bar { color: red } is counted as one declaration - color: red)

##### Complexity

- `<%= css.metrics.complexSelectors %>`: number of complex selectors (consisting of more than three expressions, e.g. header ul li .foo)
- `<%= css.metrics.oldIEFixes %>`: number of fixes for old versions of Internet Explorer (e.g. * html .foo {} and .foo { *zoom: 1 }, read more)
- `<%= css.metrics.imports %>`: imports number of @import rules
- `<%= css.metrics.importants %>`: number of properties with value forced by !important
- `<%= css.metrics.mediaQueries %>`: number of media queries (e.g. @media screen and (min-width: 1370px))
- `<%= css.metrics.oldPropertyPrefixes %>`: number of properties with no longer needed vendor prefix, powered by data provided by autoprefixer (e.g. --moz-border-radius)
- `<%= css.metrics.selectorLengthAvg.toFixed(2) %>`: average length of selector (e.g. for .foo .bar, #test div > span { color: red } will be set as 2.5)
- `<%= css.metrics.selectorsByAttribute %>`: number of selectors by attribute (e.g. .foo[value=bar])
- `<%= css.metrics.selectorsById %>`: number of selectors by ID
- `<%= css.metrics.selectorsByTag %>`: number of selectors by tag name
- `<%= css.metrics.universalSelectors %>`: number of selectors trying to match every element (e.g. .foo > *)

## Extensibility

- `<%= extensibility.endpoints.length %>`: The number of data endpoints. <% _.forEach(extensibility.endpoints, function(preference) { %>
	- **<%- preference.name %>** - <%- preference.label %> <% }); %>
- `<%= extensibility.other.length %>`: The number of custom properties. <% _.forEach(extensibility.other, function(preference) { %>
	- **<%- preference.name %>** - <%- preference.label %> <% }); %>
- `<%= extensibility.templates.length %>`: The number of project's templates. <% _.forEach(extensibility.templates, function(template) { %>
	- <%- template %> <% }); %>
- `<%= extensibility.templatesOptions.length %>`: The number of custom templates in module's preferences. <% _.forEach(extensibility.templatesOptions, function(preference) { %>
	- **<%- preference.name %>** - <%- preference.label %> <% }); %>

## Documentation

- <%= boolean({ value: documentation.preferences }) %>: Project preferences described.
- <%= boolean({ value: documentation.devPreferences }) %>: Project developer preferences described.
- <%= boolean({ value: documentation.components }) %>: Custom components described.
- <%= boolean({ value: documentation.templates }) %>: Project templates described.
- <%= boolean({ value: documentation.dependencies }) %>: Project dependencies described.
- <%= boolean({ value: documentation.devDependencies }) %>: Project developer dependencies described.
- <%= boolean({ value: documentation.description }) %>: Functional description of the widget or wireframe.
- <%= boolean({ value: documentation.test }) %>: Description of unit tests.
- <%= documentation.tests.length %>`: The number of tests files for the project. <% _.forEach(documentation.tests, function(test) { %>
	- <%- test %> <% }); %>
- <%= boolean({ value: documentation.screenshot }) %>: Screenshot
- <%= boolean({ value: documentation.diagram }) %>: Sequence diagram
- <%= boolean({ value: documentation.locale }) %>: UI messages are externalized and localizable.
- <%= boolean({ value: documentation.demo }) %>: Demo/Example widget exist.

## Mobile

- `<%= mobile.templates.length %>`: Number of separate templates for mobile.
- <%= boolean({ value: mobile.foundMomentumScrollRule }) %>: Scrollable elements are optimized for mobile with a momentum scroll.
- <%= boolean({ value: mobile.foundDisableSelectRule }) %>: Elements are optimized for mobile selection behavior.

## Date

Checklist updated on `<%= documentation.date %>`

## Resources

- [Analyze JavaScript](https://github.com/jared-stilwell/escomplex)
- [Plato](https://github.com/es-analysis/plato)
- [Analyze CSS](https://www.npmjs.com/package/analyze-css)