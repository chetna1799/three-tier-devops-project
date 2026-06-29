# Three-Tier DevOps Project

## Project Overview

This project demonstrates an end-to-end DevOps implementation of a Three-Tier Application using modern DevOps tools and practices.

The project consists of:

- Frontend (React)
- Backend (Node.js + Express)
- MySQL Database

The application is containerized using Docker and automated using Jenkins CI/CD. Code quality is analyzed using SonarQube.

---

## Architecture

Frontend (React)
        │
        ▼
Backend (Node.js + Express)
        │
        ▼
MySQL Database

CI/CD:

GitHub
   │
   ▼
Jenkins
   │
   ├── Source Code Checkout
   ├── npm Install
   ├── SonarQube Analysis
   ├── Docker Image Build
   ├── Docker Push (Future)
   └── Kubernetes Deployment (Future)

---

## Tech Stack

### Frontend

- React
- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MySQL 8

### DevOps Tools

- Git
- GitHub
- Docker
- Docker Compose
- Jenkins
- SonarQube

### Future Enhancements

- Docker Hub
- Kubernetes
- Helm
- Terraform
- AWS
- Prometheus
- Grafana
- ArgoCD

---

## Project Structure

three-tier-devops-project/

frontend/

backend/

database/

docker-compose.yml

Dockerfile

Jenkinsfile

sonar-project.properties

README.md

---

## Prerequisites

Before running the project install:

- Docker Desktop
- Git
- Node.js
- VS Code

---

## Clone Repository

git clone https://github.com/<your-github-username>/three-tier-devops-project.git

cd three-tier-devops-project

---

## Start the Application

docker compose up -d

Verify running containers

docker ps

Expected containers:

- frontend-container
- backend-container
- mysql-container

---

## Start Jenkins

docker start jenkins

Open:

http://localhost:8080

---

## Start SonarQube

docker start sonarqube

Open:

http://localhost:9000

---

## Application URLs

Frontend

http://localhost:3000

Backend API

http://localhost:5000/api/employees

Jenkins

http://localhost:8080

SonarQube

http://localhost:9000

---

## Docker Commands

Start containers

docker compose up -d

Stop containers

docker compose down

Restart backend

docker compose restart backend

View running containers

docker ps

View backend logs

docker logs backend-container

View SonarQube logs

docker logs sonarqube

View Jenkins logs

docker logs jenkins

---

## Git Commands

Check status

git status

Add changes

git add .

Commit

git commit -m "message"

Push

git push origin master

Pull

git pull origin master

---

## Jenkins Pipeline

The Jenkins pipeline performs the following stages:

- Checkout Source Code
- Install Dependencies
- SonarQube Code Analysis
- Docker Image Build
- Docker Push (Future)
- Kubernetes Deployment (Future)

---

## SonarQube

The project uses:

sonar-project.properties

for code quality analysis.

---

## Features

- Three-tier architecture
- REST API
- Dockerized application
- Docker Compose orchestration
- Jenkins CI/CD pipeline
- SonarQube integration
- Automated builds
- Code quality analysis

---

## Learning Outcomes

This project helped me gain hands-on experience with:

- Git & GitHub
- Docker
- Docker Compose
- Jenkins Pipelines
- SonarQube
- CI/CD
- Containerization
- Three-Tier Architecture
- DevOps Best Practices

---

## Future Scope

- Docker Hub Integration
- Kubernetes Deployment
- Helm Charts
- Terraform Infrastructure
- AWS Deployment
- Prometheus Monitoring
- Grafana Dashboards
- ArgoCD GitOps

---------------------------

# Start application containers
docker compose up -d

# Start Jenkins
docker start jenkins

# Start SonarQube
docker start sonarqube

# Verify everything
docker ps