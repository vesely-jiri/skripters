#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/log.sh"
source "${SCRIPT_DIR}/scripts/functions/docker.sh"

cmd::start() {
    local env=$1

    [ -n "$env" ] || log::fatal "No environment specified. Please provide an environment (e.g., development, production)."
    [ -f "${SCRIPT_DIR}/.env.${env}" ] || log::fatal "❌ Environment file not found: ${SCRIPT_DIR}/.env.${env}"
    [ -f "${SCRIPT_DIR}/docker-compose-base.yml" ] || log::fatal "❌ Docker Compose base file not found: ${SCRIPT_DIR}/docker-compose-base.yml"

    docker::check

    log::info "Starting environment: ${env}"
    if ! docker::up "$env"; then
        log::fatal "❌ Failed to start environment: ${env}"
    fi
    log::success "✅ Application started"
}

log::debug "✅ Start command loaded"