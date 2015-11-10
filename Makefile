SHELL = bash
BIN = ./node_modules/.bin
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
RELEASE?=prerelease
BETA?=""
install link:
	@npm $@

test:
	@$(BIN)/eslint .
	@$(BIN)/mocha --reporter spec

define release
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)', '$(2)')"` && \
	node -e "\
	var j = require('./package.json');\
	j.version = \"$$NEXT_VERSION\";\
	var s = JSON.stringify(j, null, 2);\
	require('fs').writeFileSync('./package.json', s);\
	"
	#git commit -m "release $$NEXT_VERSION" -- package.json && \
	#git tag "$$NEXT_VERSION" -m "release $$NEXT_VERSION"
endef

define publish
	#@echo $(1)
	#git push --tags origin HEAD:master
	#npm publish
endef


release: test
	@$(call release,$(RELEASE),$(BETA))

publish:
	@$(call publish)

.PHONY: all latest install dev link doc clean uninstall test man doc-clean docclean release
