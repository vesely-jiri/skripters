#!/bin/bash

cmd::init() {

    local env=$1

    [ -n "$env" ] || log::fatal "No environment specified. Please provide an environment (e.g., development, production)."

    log::info "Initializing environment: ${env}"

    docker::init "$env"

    log::success "Environment ${env} initialized"

}