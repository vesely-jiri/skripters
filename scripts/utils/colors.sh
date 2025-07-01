#!/bin/bash

[[ -n "${__COLORS_SH_INCLUDED__}" ]] && return
readonly __COLORS_SH_INCLUDED__=1

RED='\e[31m'
GREEN='\e[32m'
YELLOW='\e[33m'
BLUE='\e[34m'
MAGENTA='\e[35m'

RESET='\e[0m'

export RED
export GREEN
export YELLOW
export BLUE
export MAGENTA

export RESET