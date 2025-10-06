# Course Registration System (Skeleton)

Monorepo with:
- **backend/** Spring Boot (Web, JPA, Security, Validation, Flyway, PostgreSQL)
- **frontend/** React + Vite + TypeScript
- **infra/** Docker Compose (Postgres)

## Quick Start
```bash
# Start DB
docker compose -f infra/docker-compose.yml up -d

# Backend
cd backend
./mvnw spring-boot:run

# Frontend
cd ../frontend
npm install
npm run dev
```
