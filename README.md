# Docker Microservices Platform

Production-ready Dockerized microservices platform built using:

- Nginx
- Node.js
- PostgreSQL
- Redis
- Docker Compose
- GitHub Actions CI/CD

---

# Architecture

Client → Nginx → Frontend → Backend API → PostgreSQL / Redis

---

# Features

- Multi-container architecture
- Reverse proxy with Nginx
- Backend API service
- PostgreSQL integration
- Redis caching
- Persistent Docker volumes
- GitHub Actions CI/CD pipeline
- Automated Docker image builds

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Docker Compose | Orchestration |
| Nginx | Reverse proxy |
| Node.js | Backend API |
| PostgreSQL | Database |
| Redis | Caching |
| GitHub Actions | CI/CD |

---

# Project Structure

```bash
frontend/
backend/
nginx/
.github/workflows/
docker-compose.yaml
README.md
```

---

# Run Locally

```bash
docker compose up --build
```

---

# API Endpoints

| Endpoint | Description |
|---|---|
| / | Frontend |
| /api/health | Health check |
| /api/db | PostgreSQL test |
| /api/redis | Redis test |

---

# CI/CD Pipeline

The GitHub Actions workflow automatically:

- Validates Docker Compose
- Builds Docker containers
- Automates CI/CD workflow execution

Pipeline triggers on:
- push to main

---
