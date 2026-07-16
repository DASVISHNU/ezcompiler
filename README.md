# 🚀 Online Judge Platform (LeetCode Clone)

A scalable Online Judge platform inspired by LeetCode, built using **React, Node.js, PostgreSQL, Prisma, Redis, and TypeScript**. The project follows a distributed architecture where code submissions are processed asynchronously using a dedicated worker service and Redis queue.

The goal of this project is to explore backend system design concepts such as asynchronous processing, message queues, worker services, and scalable application architecture.

---

## 📖 Overview

Traditional applications execute tasks directly inside the backend, which can become a bottleneck when handling computationally expensive operations like code compilation and execution.

This project solves that problem by introducing a **Redis-based job queue** and a **Worker Service** that processes submissions independently from the API server.

---

## ✨ Features

- Multi-language code execution
  - Java
  - Python
  - JavaScript

- Asynchronous code execution using Redis Queue

- Dedicated Worker Service

- PostgreSQL database integration

- Prisma ORM

- Modular backend architecture

- Scalable design for multiple workers

- Future support for secure sandboxed execution

---

# 🏗️ Architecture

```
                     +----------------------+
                     |      Database        |
                     +----------------------+
                        ▲              ▲
                        │              │
                        │              │
+------------+          │              │
| Frontend   | -------> Backend -------+
+------------+              │
                            │
                            ▼
                    +----------------+
                    |  Redis Queue   |
                    +----------------+
                            │
                            ▼
                     +---------------+
                     |    Worker     |
                     +---------------+
                            │
                            ▼
                 Sandbox (Future Scope)
```

---

# ⚙️ How It Works

### 1. User submits code

The frontend sends the user's solution to the backend.

↓

### 2. Backend

The backend

- Validates the request
- Stores submission metadata
- Pushes the job into Redis Queue

↓

### 3. Redis Queue

Redis acts as a message broker between the backend and worker.

Instead of executing code immediately, jobs wait inside the queue.

↓

### 4. Worker

The worker continuously listens for new jobs.

When a job arrives, it

- Fetches submission
- Compiles code
- Executes program
- Stores execution result

↓

### 5. Database

Execution results are saved to PostgreSQL for later retrieval.

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript

## Backend

- Node.js
- Express.js
- TypeScript

## Database

- PostgreSQL
- Prisma ORM

## Queue

- Redis

## Worker

- Node.js
- TypeScript

---

# 📂 Project Structure

```
OnlineJudge/
│
├── frontend/
│   ├── src/
│   └── ...
│
├── backend/
│   ├── prisma/
│   ├── src/
│   └── ...
│
├── worker/
│   ├── src/
│   └── ...
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/online-judge.git
```

```
cd online-judge
```

---

## Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Worker

```bash
cd worker
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

# Environment Variables

Each service requires its own `.env` file.

Example:

### Backend

```env
DATABASE_URL=
REDIS_URL=
PORT=
```

### Worker

```env
REDIS_URL=
DATABASE_URL=
```

### Frontend

```env
VITE_BACKEND_URL=
```

> **Important:** Never commit your `.env` files. Use `.env.example` instead.

---

# Running the Project

## Start PostgreSQL

Ensure PostgreSQL is running.

---

## Start Redis

```bash
docker run -d -p 6379:6379 redis
```

---

## Start Backend

```bash
cd backend
npm run dev
```

---

## Start Worker

```bash
cd worker
npm run dev
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# Current Workflow

```
User

↓

Frontend

↓

Backend

↓

Store Submission

↓

Redis Queue

↓

Worker

↓

Compile & Execute Code

↓

Store Result

↓

Frontend Fetches Result
```

---

# Why Redis?

Executing user code directly inside the backend would block incoming requests.

Using Redis provides:

- Asynchronous processing
- Better scalability
- Faster API response times
- Support for multiple workers
- Improved fault tolerance

---

# Future Improvements

- Docker-based sandbox execution
- Hidden & sample test cases
- Time limit enforcement
- Memory limit enforcement
- User Authentication (JWT)
- Submission history
- Contest support
- Leaderboards
- WebSocket live updates
- Multiple worker instances
- Kubernetes deployment

---

# Learning Outcomes

This project helped me understand:

- Distributed system architecture
- Message queues
- Worker services
- Asynchronous processing
- Database design
- Code execution pipelines
- Backend scalability

---

# License

This project is developed for educational purposes to explore scalable backend architecture and online judge systems.
