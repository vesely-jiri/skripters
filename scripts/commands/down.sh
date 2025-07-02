#!/bin/bash

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"
source "${SCRIPT_DIR}/scripts/utils/log.sh"
source "${SCRIPT_DIR}/scripts/functions/docker.sh"

cmd::down() {
    local env=$1

    [ -n "$env" ] || log::fatal "No environment specified. Please provide an environment (e.g., development, production)."

    log::info "Stopping environment: ${env}"

    docker::down "$env" || log::fatal "❌ Failed to stop environment: ${env}"

    log::success "Environment ${env} stopped"
}