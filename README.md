# Skripts project readme
This is my personal project to learn and experiment with different programming languages, frameworks, and tools.

Skripters is website application offering various services including documentation, forum, and user profile to help developers code in Skript language, which is used for coding in Minecraft.

This project is currently under active development and not ready for public use.

## Table of contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Troubleshooting](#troubleshooting)
- [Usage](#usage)

## Overview

Frontend is build using React(Vite) framework using TSX with SWC

Backend is built on microservices architecture using Spring Cloud as Apigateway 
Microservices are built in Springboot follow ing Hexagonal architecture pattern
All databases are PostgreSQL
Whole project supports RabbitMQ messaging

## Tech Stack

- Frontend
    - React(Vite)
    - Typescript
    - SWC
    - Nginx
- Backend
    - Java 21 (LTS)
    - Maven
    - Spring Boot
    - Spring Boot Data JPA + Hibernate
    - Spring Cloud
    - PostgreSQL
    - Logback + SLF4J
    - JUnit + Mockito
    - RabbitMQ

## Installation

1.) Open terminal supporting Bash and navigate to desired project directory
```
cd /path/to/app
```

2.) Clone deployment branch
```
git clone -b deploy https://github.com/vesely-jiri/Skripters
```

3.) Navigate to cloned folder
```
cd Skripters
```

4.) Give manager script executable permission
```
chmod +x manager.sh
```

5.) Choose profile to setup production/development and follow prompts
```
./manager.sh init --env=production
```
```
./manager.sh init --env=development
```

6.) Start the profile
```
./manager.sh start --env=production
```
```
./manager.sh start --env=development
```

## Troubleshooting

- 