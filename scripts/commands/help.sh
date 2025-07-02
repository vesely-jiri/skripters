#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/colors.sh"
source "${SCRIPT_DIR}/scripts/utils/log.sh"

cmd::help() {
    echo -e "${YELLOW}Usage: $0 <command> [--env=<environment>] [options]${RESET}"
    echo -e ""
    echo -e "Commands:"
    echo -e "  init             Initialize the environment (build images, generate env files, ...)"
    echo -e "  up               Start the environment"
    echo -e "  down             Stop and remove containers"
    echo -e "  restart          Restart the running environment"
    echo -e "  logs             Show logs from the environment"
    echo -e "  status           Show status of containers"
    echo -e "  migrate          Apply database migrations"
    echo -e "  reset-db         Drop and re-initialize the database"
    echo -e "  version          Show script version"
    echo -e "  help             Show this help message"
    echo -e ""
    echo -e "Options:"
    echo -e "  --env=<environment>  Select environment to manage (default: development)"
    echo -e "  --volumes            Remove Docker volumes when using 'down'"
    echo -e "  --build              Rebuild Docker images on 'up'"
    echo -e "  --tail <N>           Show the last N lines of logs"
    echo -e ""
    echo -e "Examples:"
    echo -e "  $0 up --env=development              # Start development environment"
    echo -e "  $0 down --env=production --volumes   # Stop production and remove volumes"
    echo -e "  $0 logs --env=testing --tail 100     # Show last 100 lines of logs"
    echo -e "  $0 reset-db --env=development        # Reset the development database"
    echo -e "  $0 --version                         # Show script version"
    echo -e "  $0 --help                            # Show this help message"
    exit 0
}

log::debug "✅ Help command loaded"