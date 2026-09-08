# Production-Ready 3-Tier Dockerized Application

A fully containerized, production-grade 3-tier web application built using React for the frontend, Node.js/Express for the RESTful API backend, and PostgreSQL for persistent data storage. Orchestrated end-to-end using Docker and Docker Compose with isolated custom networking and automated data persistence.

---

## 🏗️ System Architecture

```text
               +-------------------------------------------+
               |               Client Browser              |
               +-------------------------------------------+
                                     |
                                     v
                       [ Port 3000: Interactive UI ]
+-------------------------------------------------------------------------+
| FRONTEND CONTAINER (Tier 1)                                             |
| • React (Vite / Nginx)                                                  |
+-------------------------------------------------------------------------+
                                     |
                          Internal Docker Network
                                     v
                        [ Port 5000: API Endpoints ]
+-------------------------------------------------------------------------+
| BACKEND CONTAINER (Tier 2)                                              |
| • Node.js / Express REST API                                            |
+-------------------------------------------------------------------------+
                                     |
                          Internal Docker Network
                                     v
                           [ Port 5432: PostgreSQL ]
+-------------------------------------------------------------------------+
| DATABASE CONTAINER (Tier 3)                                             |
| • PostgreSQL Database                                                   |
| • Persistent Storage: Docker Named Volume (postgres_data)                |
+-------------------------------------------------------------------------+

```

---

## ✨ Features & DevOps Best Practices

* **Full Containerization:** Every tier is packaged into its own isolated Docker container.
* **Multi-Stage Docker Builds:** Optimized frontend and backend image sizes using multi-stage builds.
* **Orchestration with Docker Compose:** Single-command setup to spin up or tear down the entire application stack.
* **Custom Docker Bridge Network:** Secure container-to-container communication using Docker's internal DNS resolution instead of hardcoded local IP addresses.
* **Data Persistence:** Named Docker volumes mapped to the PostgreSQL database container ensure zero data loss across container restarts.
* **Environment Variable Management:** Secure handling of secrets and DB credentials using `.env` files.

---

## 📁 Repository Structure

```text
Chuks3-tier-docker-app/
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── nginx.conf
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md

```

---

## ⚙️ Prerequisites

Before getting started, ensure you have the following tools installed on your host machine:

* **Docker Engine** (v20.10.0+)
* **Docker Compose** (v2.0.0+)
* **Git**

---

## 🚀 Quick Start Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Johnsonchuks/Chuks3-tier-docker-app.git
cd Chuks3-tier-docker-app

```

### 2. Configure Environment Variables

Copy the example environment configuration file and update values if needed:

```bash
cp .env.example .env

```

*Sample `.env` configuration:*

```env
# PostgreSQL Settings
POSTGRES_USER=postgres_user
POSTGRES_PASSWORD=postgres_password
POSTGRES_DB=app_database

# Backend Settings
PORT=5000
DATABASE_URL=postgres://postgres_user:postgres_password@db:5432/app_database

# Frontend Settings
VITE_API_URL=http://localhost:5000

```

### 3. Build and Start the Application Stack

Run the following command to build the Docker images and start all containers in detached mode:

```bash
docker compose up --build -d

```

### 4. Verify Running Containers

Check the status of all active containers:

```bash
docker compose ps

```

---

## 🌐 Accessing the Services

| Service | Port / URL | Description |
| --- | --- | --- |
| **Frontend UI** | `http://localhost:3000` | React Web Application |
| **Backend API** | `http://localhost:5000` | Node.js Express REST API |
| **PostgreSQL DB** | `localhost:5432` | Database Container |

---

## 🛡️ Networking & Persistent Data Management

### Custom Bridge Networking

All services run inside a custom Docker bridge network (`app-network`). Services communicate securely via service names (e.g., the backend connects to the database using `db:5432` rather than `localhost`).

### Persisting Database State

The PostgreSQL container mounts a named Docker volume to `/var/lib/postgresql/data`. To verify or inspect persistent volumes:

```bash
docker volume ls
docker volume inspect chuks3-tier-docker-app_postgres_data

```

---

## 🛠️ Useful Commands

* **View Logs:**
```bash
docker compose logs -f

```


* **View Specific Service Logs:**
```bash
docker compose logs -f backend

```


* **Stop Containers (Preserve Data):**
```bash
docker compose down

```


* **Stop Containers & Remove Volumes (Reset DB):**
```bash
docker compose down -v

```



---

## 👨‍💻 Author

**Johnson Nwafor**

Cloud Engineer & DevOps Enthusiast

* **LinkedIn:** [Johnson Nwafor](https://www.google.com/search?q=https://www.linkedin.com/in/johnson-nwafor-0b94571ba)
* **GitHub:** [@Johnsonchuks](https://www.google.com/search?q=https://github.com/Johnsonchuks)
* **Email:** johnsonchuks6@gmail.com
