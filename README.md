# Docker Microservices Platform

Production-ready Dockerized microservices platform using:

- Nginx
- Node.js
- PostgreSQL
- Redis
- Docker Compose

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
- Docker Compose orchestration

---

# Tech Stack

- Docker
- Docker Compose
- Node.js
- Express
- PostgreSQL
- Redis
- Nginx

---

# Project Structure

```bash
frontend/
backend/
nginx/
docker-compose.yaml
```

---

# Run Project

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
