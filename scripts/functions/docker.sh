#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/log.sh"

docker::check() {
    docker &> /dev/null || log::fatal "❌ Docker is not installed or not in PATH!"
    docker compose &> /dev/null || log::fatal "❌ Docker Compose not available. Please install or update Docker!"
    docker info &> /dev/null || log::fatal "❌ Docker is not running. Please start Docker first!"
}

docker::get_compose_command() {
    local env=$1
    local base="${SCRIPT_DIR}/docker-compose"
    local base_file="${base}-base.yml"
    local database_file="${base}-databases.yml"
    local backend_services_file="${base}-backend-services.yml"
    local profile_file="${base}-${env}.yml"

    printf "%q " docker compose \
        -f "${base_file}" \
        -f "${database_file}" \
        -f "${backend_services_file}" \
        -f "${profile_file}" \
        --env-file "${SCRIPT_DIR}/.env.${env}"
}

docker::init() {
    local env=$1
    docker::check
    docker::_validate_env "$env"

    eval "cmd=($(docker::get_compose_command "$env"))"
    [[ "$env" == "production" ]] && cmd+=("pull")
    cmd+=("build")

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
    
    local cmd
    eval "cmd=($(docker::get_compose_command "$env"))"
    cmd+=("up" "-d")

    if ! "${cmd[@]}"; then
        log::fatal "❌ Failed to start environment: ${env}"
    fi
}

docker::down() {
    local env=$1; shift
    docker::check
    docker::_validate_env "$env"

    eval "cmd=($(docker::get_compose_command "$env"))"
    cmd+=("down")
    cmd+=("$@")

    if ! "${cmd[@]}"; then
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

log::debug "✅ Docker functions loaded"