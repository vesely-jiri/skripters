#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/log.sh"
source "${SCRIPT_DIR}/scripts/functions/docker.sh"

cmd::start() {
    local env=$1

    log::info "Starting environment: ${env}"
    if ! docker::up "$env"; then
        log::fatal "❌ Failed to start environment: ${env}"
    fi
    log::success "✅ Application started"
}

log::debug "✅ Start command loaded"