#!/bin/bash

source "${SCRIPT_DIR}/scripts/utils/colors.sh"

LOG_DIR="${SCRIPT_DIR}/logs/"
LOG_FILE="${LOG_DIR}/manager.log"

mkdir -p "${LOG_DIR}"
touch "${LOG_FILE}"

log::__base() {
    local color="$1"
    local level="$2"
    shift 2
    local msg="$*"
    local timestamp
    timestamp="$(date '+%H:%M:%S')"

    local output="${color}[${timestamp} ${level}]${RESET} ${msg}"
    local no_color_output="[${timestamp} ${level}] ${msg}"

    if [[ "$level" == "ERROR" || "$level" == "FATAL" ]]; then
        echo -e "$output" >&2
        echo "$no_color_output" >> "$LOG_FILE"
    else
        echo -e "$output"
        echo "$no_color_output" >> "$LOG_FILE"
    fi
}

log::info()    { log::__base "$BLUE" "INFO" "$*"; }
log::success() { log::__base "$GREEN" "OK" "$*"; }
log::warn()    { log::__base "$YELLOW" "WARN" "$*"; }
log::error()   { log::__base "$RED" "ERROR" "$*"; }
log::debug()   {
    if [[ "${DEBUG}" == true ]]; then
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

log::debug "✅ Log functions loaded"