#!/bin/bash

DEBUG=${DEBUG:-false}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

source "${SCRIPT_DIR}/scripts/utils/log.sh"
source "${SCRIPT_DIR}/scripts/functions/docker.sh"
source "${SCRIPT_DIR}/scripts/commands/help.sh"
source "${SCRIPT_DIR}/scripts/commands/version.sh"
source "${SCRIPT_DIR}/scripts/commands/init.sh"
source "${SCRIPT_DIR}/scripts/commands/up.sh"
source "${SCRIPT_DIR}/scripts/commands/down.sh"

if [[ $# -eq 0 ]]; then
    log::error "❌ No arguments provided"
    cmd::help
fi

COMMAND="$1"
shift

case "$COMMAND" in
    init|up|down|restart|logs|status|migrate|reset-db|help|version)
        ;;
    *)
        log::fatal "Unknown command: $COMMAND"
        ;;
esac

ENVIRONMENT="development"

for arg in "$@"; do
    case "$arg" in
        --env=*|--environment=*|-e=*)
            ENVIRONMENT="${arg#*=}"
            ;;
        --help)
            cmd::help
            exit 0
            ;;
        *)
            log::fatal "Unknown argument: $arg"
            ;;
    esac
done

case "$COMMAND" in
    init|up|down|restart|logs|status|migrate|reset-db|version|help)
        cmd::"$COMMAND" "$ENVIRONMENT" "$@"
        ;;
esac