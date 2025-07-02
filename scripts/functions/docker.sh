#!/bin/bash

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"
source "$SCRIPT_DIR/../utils/log.sh"

docker::check() {
    docker &> /dev/null || log::fatal "❌ Docker is not installed or not in PATH!"
    docker compose &> /dev/null || log::fatal "❌ Docker Compose not available. Please install or update Docker!"
    docker info &> /dev/null || log::fatal "❌ Docker is not running. Please start Docker first!"
}

docker::init() {
    local env=$1
    docker::check
    docker::_validate_env "$env"
    local compose_file="${SCRIPT_DIR}/docker-compose-${env}.yml"
    local cmd=(docker compose -f "${SCRIPT_DIR}/docker-compose-base.yml" -f "$compose_file" --env-file "${SCRIPT_DIR}/.env.${env}" build)

    if ! "${cmd[@]}"; then
        log::fatal "❌ Failed to initialize environment: ${env}"
    fi
}

docker::_validate_env() {
    local env=$1
    [ -n "$env" ] || log::fatal "No environment specified."
    [ -f "${SCRIPT_DIR}/.env.${env}" ] || log::fatal "❌ Environment file not found: ${SCRIPT_DIR}/.env.${env}"
    [ -f "${SCRIPT_DIR}/docker-compose-base.yml" ] || log::fatal "❌ Docker Compose base file not found."
}

docker::up() {
    local env=$1
    docker::check
    docker::_validate_env "$env"
    local compose_file="${SCRIPT_DIR}/docker-compose-${env}.yml"

    if ! docker compose -f "${SCRIPT_DIR}/docker-compose-base.yml" -f "$compose_file" --env-file "${SCRIPT_DIR}/.env.${env}" up -d; then
        log::fatal "❌ Failed to start environment: ${env}"
    fi
}

docker::down() {
    local env=$1
    docker::check
    docker::_validate_env "$env"
    local compose_file="${SCRIPT_DIR}/docker-compose-${env}.yml"

    if ! docker compose -f "${SCRIPT_DIR}/docker-compose-base.yml" -f "$compose_file" --env-file "${SCRIPT_DIR}/.env.${env}" down; then
        log::fatal "❌ Failed to stop environment: ${env}"
    fi
}

docker::restart() {
    local env=$1
    docker::check
    docker::_validate_env "$env"

    docker::down "$env"
    docker::up "$env"
}