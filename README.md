# 🏨 Hostel Complaint Management System (Frontend - UI Team)

This project is the **Frontend UI** of a Role-Based Hostel Complaint Management System developed using **ReactJS**.
It allows students to submit complaints digitally and administrators to monitor and update complaint status efficiently.

---

## 👥 Team Responsibility

This repository contains only the **Frontend Layer (Presentation Layer)**.

Backend (Spring Boot) and Database (PostgreSQL) are handled by separate teams.

---

## 🚀 Tech Stack

* ReactJS (Vite)
* React Router DOM
* Axios
* CSS (Custom Styling)

---

## 📂 Project Structure

```
src/
 ├── api/                # API configuration & service layer
 ├── components/         # Reusable UI components
 ├── layouts/            # Main layout wrapper
 ├── pages/              # Application pages
 ├── routes/             # Routing configuration
 ├── styles/             # Global styling
 ├── App.jsx
 └── main.jsx
```

---

## 🧩 Implemented Pages

### 1️⃣ Dashboard

* Complaint statistics summary
* Recent complaints table
* Quick navigation buttons

### 2️⃣ Create Complaint

* Complaint submission form
* Validation handling
* File upload support

### 3️⃣ Complaint List

* View all complaints
* Filter by status & category
* Pagination support

### 4️⃣ Complaint Details

* View full complaint information
* Download attachment
* Update complaint status

### 5️⃣ Users (Optional)

* Basic user listing UI

---

## 🔗 Expected Backend Base URL

```
http://localhost:8080/api
```

---

## 📦 API Contract

### Complaint Object

```json
{
  "id": 1,
  "title": "Broken Chair",
  "description": "Chair leg damaged",
  "category": "CARPENTRY",
  "status": "OPEN",
  "createdDate": "2026-02-01",
  "assignedTo": "Ram",
  "attachmentUrl": "http://localhost:8080/files/1.jpg"
}
```

---

### Dashboard Stats

```json
{
  "total": 25,
  "open": 10,
  "inProgress": 8,
  "resolved": 7
}
```

---

### Create Complaint (multipart/form-data)

Fields:

```
title
description
category
userId
file
```

---

### Update Complaint Status

```
PUT /api/complaints/{id}/status
Body:
{
  "status": "RESOLVED"
}
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```
npm install
```

### 2. Run project

```
npm run dev
```

### 3. Open in browser

```
http://localhost:5173
```

---

## 🧪 Notes for Backend Team

* Follow the provided API contract strictly
* Response fields must match naming exactly
* Dates should be ISO format
* File URL must be accessible publicly

---

## 📌 Features Covered

✔ Role-based UI structure
✔ Complaint submission UI
✔ Status tracking UI
✔ File upload support UI
✔ Dashboard analytics UI
✔ Responsive layout

---

## 📄 Author

Frontend UI Team – Hostel Complaint Management System
