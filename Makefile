# vim: set softtabstop=4 shiftwidth=4:

SHELL = bash
BIN = ./node_modules/.bin
BRANCH?= $(shell git rev-parse --abbrev-ref HEAD)
PUBLIC_REMOTE?= "http://github.com/backbase/bb-lp-cli"
PRIVATE_REMOTE?= "ssh://git@stash.backbase.com:7999/lp/cli.git"
VERSION?=$(strip $(call get_current_version))
RELSEASE_TAG?=$(strip $(call get_next_version,$(BUMP),$(RC)))
BUMP?=prerelease
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

define get_next_version
	$(shell node -pe "require('./scripts/release.js').getNextVersion('$(1)','$(2)')")
endef

define get_current_version
	$(shell node -pe "require('./scripts/release.js').getVersion()")
endef

define bump_version
	echo "Bumping to version: $(1)" \
	$(shell node -e "require('./scripts/release.js').bump('$(1)')")
endef

define tag
	git commit -m "release version - $(1)" -- package.json && \
	echo "Tagging release: $(1)" && \
	git tag "$(1)" -m "release $(1)"
endef

define branch
	BRANCH="rc-$(1)" && \
	git checkout -b $$BRANCH
endef

define publish
	echo "git push --tags $(PRIVATE_REMOTE) HEAD:$(BRANCH) $(1)" && \
	git push --tags $(PRIVATE_REMOTE) HEAD:$(BRANCH) && \
	echo "git push --tags $(PUBLIC_REMOTE) HEAD:$(BRANCH) $(1)" && \
	git push --tags $(PUBLIC_REMOTE) HEAD:$(BRANCH)
endef

check:
	@echo "Check next release version: $(RELSEASE_TAG)"

branch:
	@$(call branch,$(RELSEASE_TAG),$(RC))

bump:
	@$(call bump_version,$(RELSEASE_TAG))
	@$(call tag,$(VERSION))

publish: test
	@$(call publish,$(RC))
ifeq ($(RC),"")
	@echo "npm publish $(2)";
	@npm publish $(2)
else
	@echo "npm publish --tag $(2)"
	@npm publish --tag $(2)
endif

release: check branch bump publish

.PHONY: all latest install dev link doc clean uninstall test man doc-clean docclean release
