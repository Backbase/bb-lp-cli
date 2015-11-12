# vim: set softtabstop=4 shiftwidth=4:

SHELL = bash
BIN = ./node_modules/.bin
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
PUBLIC_REMOTE = "http://github.com/backbase/bb-lp-cli"
PRIVATE_REMOTE = "ssh://git@stash.backbase.com:7999/lp/cli.git"
RELSEASE_TAG = $(strip $(call get_release_tag,$(BUMP),$(RC)))
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

define get_release_tag
	$(shell node -pe "require('./scripts/release.js').getNextVersion('$(1)','$(2)')")
endef

define bump_version
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
	echo "Publishing tag: $(1) $(2)"
	#git push --tags $(PRIVATE_REMOTE) HEAD:$(BRANCH) && \
	#git push --tags $(PUBLIC_REMOTE) HEAD:$(BRANCH) && \
	#npm publish --tag $(1)
endef


bump:
	@$(call bump_version,$(RELSEASE_TAG),$(RC))
	@$(call tag,$(RELSEASE_TAG),$(RC))

release:
	@$(call branch,$(RELSEASE_TAG),$(RC))
	@$(call bump,$(RELSEASE_TAG),$(RC))

publish: test bump
	@$(call publish,$(RELSEASE_TAG),$(RC))


.PHONY: all latest install dev link doc clean uninstall test man doc-clean docclean release
