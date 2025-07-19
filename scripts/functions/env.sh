#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/log.sh"

env::init() {
    local env=$1
    if ! env::check "$env"; then
        log::warn "Environment file already exists: ${SCRIPT_DIR}/.env.${env}. Skipping creation"
        return 0
    fi
    env::generate "$env"
}

env::check() {
    local env=$1
    if [ -f "${SCRIPT_DIR}/.env.${env}" ]; then
        return 1
    fi
    return 0
}

env::generate() {
    local env=$1
    local env_file="${SCRIPT_DIR}/.env.${env}"

    read -r -s -p "Enter new auth database password (leave empty to generate one using openssl): " auth_db_password
    echo

    if [ -z "$auth_db_password" ]; then
        auth_db_password=$(openssl rand -base64 16)
        log::success "Generated database password"
    fi

    read -r -s -p "Enter new docs database password (leave empty to generate one using openssl): " docs_db_password
    echo

    if [ -z "$docs_db_password" ]; then
        docs_db_password=$(openssl rand -base64 16)
        log::success "Generated database password"
    fi

    read -r -s -p "Enter new RabbitMQ password (leave empty to generate one using openssl): " rabbitmq_password
    echo

    if [ -z "$rabbitmq_password" ]; then
        rabbitmq_password=$(openssl rand -base64 16)
        log::success "Generated RabbitMQ password"
    fi



    cat > "$env_file" << EOF
# .env file for environment: $env

AUTH_POSTGRES_DB=postgres
AUTH_POSTGRES_USER=postgres
AUTH_POSTGRES_PASSWORD=$auth_db_password

DOCS_POSTGRES_DB=postgres
DOCS_POSTGRES_USER=postgres
DOCS_POSTGRES_PASSWORD=$docs_db_password

RABBITMQ_HOST=rabbitmq
RABBITMQ_PORT=5672
RABBITMQ_USER=admin
RABBITMQ_PASSWORD=$rabbitmq_password
RABBITMQ_DEFAULT_USER=rabbitmq
RABBITMQ_DEFAULT_PASS=$rabbitmq_password

EOF
}

log::debug "✅ Env functions loaded"