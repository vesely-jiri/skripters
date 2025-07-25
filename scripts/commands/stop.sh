#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/log.sh"
source "${SCRIPT_DIR}/scripts/functions/docker.sh"

cmd::stop() {
    local env=$1; shift

    log::info "Stopping environment: ${env}"

    docker::down "$env" "$@" || log::fatal "❌ Failed to stop environment: ${env}"

    log::success "Environment ${env} stopped"
}

log::debug "✅ Stop command loaded"