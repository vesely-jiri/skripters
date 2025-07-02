#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/log.sh"

VERSION="1.0.0"

cmd::version() {
    local env=$1
    log::info ""
    log::info "Skripters Manager"
    log::info "Version: $(get_version)"
    log::info "Environment: $env"
    log::info ""
}

get_version() {
    echo "$VERSION"
}

log::debug "✅ Version command loaded"