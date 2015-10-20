Title<% _.forEach(projects, function(project) { %>, <%- project.projectName %><% }); %>

Length of dist source code (in bytes)<% _.forEach(projects, function(project){ %>,<%= project.javascript.length %><% }); %>
Physical lines for the project<% _.forEach(projects, function(project){ %>,<%= project.javascript.ploc %><% }); %>
Logical lines for the project<% _.forEach(projects, function(project){ %>,<%= project.javascript.lloc %><% }); %>
The number of project's JavaScript modules<% _.forEach(projects, function(project){ %>,<%= project.javascript.modules.length %><% }); %>
The number of dependencies for the project<% _.forEach(projects, function(project){ %>,<%= project.javascript.dependencies.length %><% }); %>

The average per-function count of logical lines of code<% _.forEach(projects, function(project){ %>,<%= project.javascript.loc.toFixed(2) %><% }); %>
The average per-function cyclomatic complexity<% _.forEach(projects, function(project){ %>,<%= project.javascript.cyclomatic.toFixed(2) %><% }); %>
The average per-function Halstead effort<% _.forEach(projects, function(project){ %>,<%= project.javascript.effort.toFixed(2) %><% }); %>
The average per-function parameter count<% _.forEach(projects, function(project){ %>,<%= project.javascript.params.toFixed(2) %><% }); %>
The average per-module maintainability index<% _.forEach(projects, function(project){ %>,<%= project.javascript.maintainability.toFixed(2) %><% }); %>

length of CSS source (in bytes)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.length %><% }); %>
The number of project's CSS modules<% _.forEach(projects, function(project){ %>,<%= project.extensibility.styles.length %><% }); %>
The number of selectors (e.g. .foo; .bar { color: red } is counted as two selectors - .foo and .bar)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.selectors %><% }); %>
The number of rules (e.g. .foo; .bar { color: red } is counted as one rule)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.rules %><% }); %>
The number of declarations (e.g. .foo; .bar { color: red } is counted as one declaration - color: red)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.declarations %><% }); %>

The number of complex selectors (consisting of more than three expressions; e.g. header ul li .foo)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.complexSelectors %><% }); %>
The number of fixes for old versions of Internet Explorer (e.g. * html .foo {} and .foo { *zoom: 1 }; read more)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.oldIEFixes %><% }); %>
Imports number of @import rules<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.imports %><% }); %>
The number of properties with value forced by !important<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.importants %><% }); %>
The number of media queries (e.g. @media screen and (min-width: 1370px))<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.mediaQueries %><% }); %>
The number of properties with no longer needed vendor prefix; powered by data provided by autoprefixer (e.g. --moz-border-radius)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.oldPropertyPrefixes %><% }); %>
Average length of selector <% _.forEach(projects, function(project){ %>,<%= project.css.metrics.selectorLengthAvg %><% }); %>
The number of selectors by attribute (e.g. .foo[value=bar])<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.selectorsByAttribute %><% }); %>
The number of selectors by ID<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.selectorsById %><% }); %>
The number of selectors by tag name<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.selectorsByTag %><% }); %>
The number of selectors trying to match every element (e.g. .foo > *)<% _.forEach(projects, function(project){ %>,<%= project.css.metrics.universalSelectors %><% }); %>

The number of data endpoints<% _.forEach(projects, function(project){ %>,<%= project.extensibility.endpoints.length %><% }); %>
The number of custom properties<% _.forEach(projects, function(project){ %>,<%= project.extensibility.other.length %><% }); %>
The number of project's templates<% _.forEach(projects, function(project){ %>,<%= project.extensibility.templates.length %><% }); %>
The number of custom templates in module's preferences<% _.forEach(projects, function(project){ %>,<%= project.extensibility.templatesOptions.length %><% }); %>

Project preferences described<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.preferences }) %><% }); %>
Project developer preferences described<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.devPreferences }) %><% }); %>
Custom components described<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.components }) %><% }); %>
Project templates described<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.templates }) %><% }); %>
Project dependencies described<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.dependencies }) %><% }); %>
Project developer dependencies described<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.devDependencies }) %><% }); %>
Functional description of the widget or wireframe<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.description }) %><% }); %>
Description of unit tests<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.test }) %><% }); %>
The number of tests files for the project<% _.forEach(projects, function(project){ %>,<%= project.documentation.tests.length %><% }); %>
Screenshot<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.screenshot }) %><% }); %>
Sequence diagram<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.diagram }) %><% }); %>
UI messages are externalized and localizable<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.locale }) %><% }); %>
Demo/Example widget exist<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.demo }) %><% }); %>

Number of separate templates for mobile<% _.forEach(projects, function(project){ %>,<%= project.mobile.templates.length %><% }); %>
Scrollable elements are optimized for mobile with a momentum scroll<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.mobile.foundMomentumScrollRule }) %><% }); %>
Elements are optimized for mobile selection behavior<% _.forEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.mobile.foundDisableSelectRule }) %><% }); %>