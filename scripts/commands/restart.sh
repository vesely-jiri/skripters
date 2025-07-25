#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/log.sh"
source "${SCRIPT_DIR}/scripts/functions/docker.sh"

cmd::restart() {
    local env=$1

    log::info "Restarting environment: ${env}"
    if ! docker::restart "$env"; then
        log::fatal "❌ Failed to restart environment: ${env}"
    fi
    log::success "✅ Application restarted"
}

log::debug "✅ Restart command loaded"