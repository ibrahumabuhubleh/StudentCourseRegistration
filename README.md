# 🎓 Student Course Registration System
A full-stack web application designed to simplify student course registration, scheduling, and management.  
This system integrates modern technologies to ensure a secure, responsive, and scalable academic experience for students and instructors alike.

---

## 🧩 Tech Stack
**Backend:** Spring Boot (Web, JPA, Security, Validation, Flyway, PostgreSQL)  
**Frontend:** React + Vite + TypeScript  
**Database:** PostgreSQL (via Docker Compose)  
**Infrastructure:** Docker, Maven

---

## 🚀 Quick Start
```bash
docker compose -f infra/docker-compose.yml up -d

# Backend
cd backend
./mvnw spring-boot:run

# Frontend
cd ../frontend
npm install
npm run dev
```
