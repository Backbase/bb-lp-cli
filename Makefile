SHELL = bash
BIN = ./node_modules/.bin
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
PUBLIC_REMOTE = "http://github.com/backbase/bb-lp-cli"
PRIVATE_REMOTE = "ssh://git@stash.backbase.com:7999/lp/cli.git"
V?=prerelease
RC?=""

install link:
	@npm $@
	@npm shrinkwrap

clean:
	@npm cache clean
	@rm -rf node_modules

test:
	@$(BIN)/eslint .
	@$(BIN)/mocha --reporter spec

define bump
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)', '$(2)')"` && \
	echo "Bump version: $$NEXT_VERSION" && \
	node -e "\
		var j = require('./package.json');\
		j.version = \"$$NEXT_VERSION\";\
		var s = JSON.stringify(j, null, 2);\
		require('fs').writeFileSync('./package.json', s);\
	" && \
	git commit -m "release version - $$NEXT_VERSION" -- package.json && \
	echo "Tagging release: $$NEXT_VERSION" && \
	git tag "$$NEXT_VERSION" -m "release $$NEXT_VERSION"
endef

define branch
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)', '$(2)')"` && \
	BRANCH="rc-$$NEXT_VERSION" && \
	git checkout -b $$BRANCH
endef

bump:
	@$(call bump,$(V),$(RC))

release:
	@$(call branch,$(V),$(RC))
	@$(call bump,$(V),$(RC))
pubish:
	@echo "Publishing tag: $(NEXT_VERSION)"  && \
	git push --tags $(PRIVATE_REMOTE) HEAD:$(BRANCH) && \
	git push --tags $(PUBLIC_REMOTE) HEAD:$(BRANCH) && \
	npm publish --tag $(1)

pubish:
	@echo "Publishing tag: $(NEXT_VERSION)"  && \
	git push --tags $(PRIVATE_REMOTE) HEAD:$(BRANCH) && \
	git push --tags $(PUBLIC_REMOTE) HEAD:$(BRANCH) && \
	npm publish --tag $(1)

.PHONY: all latest install dev link doc clean uninstall test man doc-clean docclean release
