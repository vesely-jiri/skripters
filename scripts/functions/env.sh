#!/bin/bash

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"
source "$SCRIPT_DIR/../utils/log.sh"

env::init() {
    local env=$1

    env::check "$env"

    env::generate "$env"

}

env::check() {
    local env=$1
    if [ -f "${SCRIPT_DIR}/.env.${env}" ]; then
        log::fatal "❌ Environment file already exists: ${SCRIPT_DIR}/.env.${env}"
    fi
}

env::generate() {
    local env=$1
    local env_file="${SCRIPT_DIR}/.env.${env}"

    read -r -s -p "Enter new database(Postgres) password (leave empty to generate one using openssl): " db_password

    if [ -z "$db_password" ]; then
        db_password=$(openssl rand -base64 16)
        log::info "Generated database password"
    fi

    read -r -s -p "Enter new RabbitMQ password (leave empty to generate one using openssl): " rabbitmq_password

    if [ -z "$rabbitmq_password" ]; then
        rabbitmq_password=$(openssl rand -base64 16)
        log::info "Generated RabbitMQ password"
    fi



    cat > "$env_file" << EOF
# .env file for environment: $env

POSTGRES_DB: postgres
POSTGRES_PORT: 5432
POSTGRES_USER: postgres
POSTGRES_PASSWORD: $db_password

RABBITMQ_HOST: rabbitmq
RABBITMQ_PORT: 5672
RABBITMQ_USER: admin
RABBITMQ_PASSWORD: $rabbitmq_password

EOF
}
