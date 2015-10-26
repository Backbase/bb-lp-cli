Title<% tryForEach(projects, function(project) { %>, <%- project.projectName %><% }); %>

Length of dist source code (in bytes)<% tryForEach(projects, function(project){ %>,<%= project.javascript.length %><% }); %>
Physical lines for the project<% tryForEach(projects, function(project){ %>,<%= project.javascript.ploc %><% }); %>
Logical lines for the project<% tryForEach(projects, function(project){ %>,<%= project.javascript.lloc %><% }); %>
The number of project's JavaScript modules<% tryForEach(projects, function(project){ %>,<%= project.javascript.modules.length %><% }); %>
The number of dependencies for the project<% tryForEach(projects, function(project){ %>,<%= project.javascript.dependencies.length %><% }); %>

The average per-function count of logical lines of code<% tryForEach(projects, function(project){ %>,<%= project.javascript.loc.toFixed(2) %><% }); %>
The average per-function cyclomatic complexity<% tryForEach(projects, function(project){ %>,<%= project.javascript.cyclomatic.toFixed(2) %><% }); %>
The average per-function Halstead effort<% tryForEach(projects, function(project){ %>,<%= project.javascript.effort.toFixed(2) %><% }); %>
The average per-function parameter count<% tryForEach(projects, function(project){ %>,<%= project.javascript.params.toFixed(2) %><% }); %>
The average per-module maintainability index<% tryForEach(projects, function(project){ %>,<%= project.javascript.maintainability.toFixed(2) %><% }); %>

length of CSS source (in bytes)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.length %><% }); %>
The number of project's CSS modules<% tryForEach(projects, function(project){ %>,<%= project.extensibility.styles.length %><% }); %>
The number of selectors (e.g. .foo; .bar { color: red } is counted as two selectors - .foo and .bar)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.selectors %><% }); %>
The number of rules (e.g. .foo; .bar { color: red } is counted as one rule)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.rules %><% }); %>
The number of declarations (e.g. .foo; .bar { color: red } is counted as one declaration - color: red)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.declarations %><% }); %>

The number of complex selectors (consisting of more than three expressions; e.g. header ul li .foo)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.complexSelectors %><% }); %>
The number of fixes for old versions of Internet Explorer (e.g. * html .foo {} and .foo { *zoom: 1 }; read more)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.oldIEFixes %><% }); %>
Imports number of @import rules<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.imports %><% }); %>
The number of properties with value forced by !important<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.importants %><% }); %>
The number of media queries (e.g. @media screen and (min-width: 1370px))<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.mediaQueries %><% }); %>
The number of properties with no longer needed vendor prefix; powered by data provided by autoprefixer (e.g. --moz-border-radius)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.oldPropertyPrefixes %><% }); %>
Average length of selector <% tryForEach(projects, function(project){ %>,<%= project.css.metrics.selectorLengthAvg %><% }); %>
The number of selectors by attribute (e.g. .foo[value=bar])<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.selectorsByAttribute %><% }); %>
The number of selectors by ID<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.selectorsById %><% }); %>
The number of selectors by tag name<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.selectorsByTag %><% }); %>
The number of selectors trying to match every element (e.g. .foo > *)<% tryForEach(projects, function(project){ %>,<%= project.css.metrics.universalSelectors %><% }); %>

The number of data endpoints<% tryForEach(projects, function(project){ %>,<%= project.extensibility.endpoints.length %><% }); %>
The number of custom properties<% tryForEach(projects, function(project){ %>,<%= project.extensibility.other.length %><% }); %>
The number of project's templates<% tryForEach(projects, function(project){ %>,<%= project.extensibility.templates.length %><% }); %>
The number of custom templates in module's preferences<% tryForEach(projects, function(project){ %>,<%= project.extensibility.templatesOptions.length %><% }); %>

Project preferences described<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.preferences }) %><% }); %>
Project developer preferences described<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.devPreferences }) %><% }); %>
Custom components described<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.components }) %><% }); %>
Project templates described<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.templates }) %><% }); %>
Project dependencies described<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.dependencies }) %><% }); %>
Project developer dependencies described<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.devDependencies }) %><% }); %>
Functional description of the widget or wireframe<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.description }) %><% }); %>
Description of unit tests<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.test }) %><% }); %>
The number of tests files for the project<% tryForEach(projects, function(project){ %>,<%= project.documentation.tests.length %><% }); %>
Screenshot<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.screenshot }) %><% }); %>
Sequence diagram<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.diagram }) %><% }); %>
UI messages are externalized and localizable<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.locale }) %><% }); %>
Demo/Example widget exist<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.documentation.demo }) %><% }); %>

Number of separate templates for mobile<% tryForEach(projects, function(project){ %>,<%= project.mobile.templates.length %><% }); %>
Scrollable elements are optimized for mobile with a momentum scroll<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.mobile.foundMomentumScrollRule }) %><% }); %>
Elements are optimized for mobile selection behavior<% tryForEach(projects, function(project){ %>,<%= boolean({ silent: true, value: project.mobile.foundDisableSelectRule }) %><% }); %>