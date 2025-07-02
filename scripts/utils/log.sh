#!/bin/bash

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"
source "$SCRIPT_DIR/scripts/utils/colors.sh"

LOG_FILE="$SCRIPT_DIR/scripts/app.log"
DEBUG=${DEBUG:-false}

log::__base() {
    local color="$1"
    local level="$2"
    shift 2
    local msg="$*"
    local timestamp
    timestamp="$(date '+%H:%M:%S')"
    local output="${color}[${timestamp} ${level}]${RESET} ${msg}"
    if [[ "$level" == "ERROR" || "$level" == "FATAL" ]]; then
        echo -e "$output" | tee -a "$LOG_FILE" >&2
    else
        echo -e "$output" | tee -a "$LOG_FILE"
    fi
}

log::info()    { log::__base "$BLUE" "INFO" "$*"; }
log::success() { log::__base "$GREEN" "OK" "$*"; }
log::warn()    { log::__base "$YELLOW" "WARN" "$*"; }
log::error()   { log::__base "$RED" "ERROR" "$*"; }
log::debug()   {
    if [[ "$DEBUG" == true ]]; then
        log::__base "$MAGENTA" "DEBUG" "$*"
    fi
}
log::fatal()   {
    log::__base "$RED" "FATAL" "$*"
    exit 1
}

log::clean_logs() {
    if [[ -f "$LOG_FILE" ]]; then
        rm -f "$LOG_FILE"
        log::success "Log file '$LOG_FILE' deleted."
    else
        log::warn "'$LOG_FILE' does not exist. No action needed."
    fi
}
