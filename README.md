# **🔐 Lock N Learn - Web-Based Cybersecurity Educational Application**

![Java](https://img.shields.io/badge/Backend-Java%20%7C%20Spring%20Boot-green)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Tailwind](https://img.shields.io/badge/UI-TailwindCSS-38B2AC)
![License](https://img.shields.io/badge/License-Educational-lightgrey)
![Status](https://img.shields.io/badge/Project-Final%20Capstone-success)

---

# 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo Screenshots](#demo-screenshots)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [API Example](#api-example)
- [Future Improvements](#future-improvements)
- [Contributors](#contributors)

---

# 📌 Overview
Lock N Learn is a web-based cybersecurity education application designed to help users understand how secure their passwords really are. The system analyzes user-provided passwords and provides interactive feedback about potential weaknesses, estimated cracking time, and common attack patterns used by real-world attackers.

The goal of the project is to educate users on password security best practices by demonstrating how attackers exploit predictable password patterns and structures. By visualizing these vulnerabilities, the application encourages users to create stronger and more resilient passwords.

---

# 🎯 Features
## **🔎 Real-Time Password Strength Checker**
- Analyzes passwords as the user types
- Detects:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
  - Minimum length requirements
- Provides dynamic feedback messages explaining how to improve the password
- Displays an entropy strength bar that updates in real time

---

## **🧠 Password Pattern Analysis**
Provides deeper analysis by breaking down the password into segments and detecting weak patterns such as:
- Sequential characters (e.g. `abc`, `123`)
- Repeating digits
- Dictionary words
- Keyboard patterns (e.g. `qwerty`, `asdf`)
- Year patterns (e.g. `1999`, `2025`)

Users receive feedback showing which parts of their password are weak.

---

## **⏱️ Password Crack-Time Estimator**
Simulates the time required for attackers to crack a password using different methods:
- Brute Force Attack
- Dictionary Attack
- Hybrid Attack

Users can customize the attack environment using the Attacker Configuration Menu

---

## **🎮 Password Game**
An interactive game where users must construct passwords that satisfy progressively more complex security rules.

This gamified experience reinforces secure password creation techniques.

---

## **🌐 Live Cyber Attack Map**
Displays a real-time visualization of cyber attacks occurring around the world to demonstrate the scale of cybersecurity threats.

---

# 🖼️ Demo Screenshots

```
/screenshots
  password-checker.png
  pattern-analysis.png
  password-game.png
  attack-map.png
```

Example:

### Password Strength Checker
![Password Checker](screenshots/password-checker.png)

### Pattern Analysis
![Pattern Analysis](screenshots/pattern-analysis.png)

---

# 🏗️ System Architecture
The application follows a full-stack client-server architecture using REST APIs.

```
Frontend (React + Tailwind)
        │
        │ Fetch API Requests
        ▼
Backend REST API (Spring Boot)
        │
        ├── PasswordStrengthController
        ├── PatternAnalysisController
        └── AttackSimulationController
                │
                ▼
        Password Analysis Services
        Pattern Detection Algorithms
        Dictionary & Pattern Databases
```

### Backend Responsibilities
- Password entropy calculation
- Pattern detection algorithm
- Password cracking simulation
- Dictionary and keyboard pattern comparisons

### Frontend Responsibilities
- Dynamic user interface
- Real-time password feedback
- Interactive tools
- Data visualization

---

# 🛠️ Tech Stack
### Frontend
- React
- JavaScript
- Tailwind CSS
- HTML

### Backend
- Java
- Spring Boot
- REST APIs

### Development Tools
- Git
- GitHub
- VS Code
- Maven
- Node.js / npm

---

# 🚀 Getting Started
## **Prerequisites**
- Node.js
- npm
- Java JDK 17+
- Maven
- Git

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/password-security-toolkit.git
cd password-security-toolkit
```

---

## 2️⃣ Start the Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## 3️⃣ Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📡 API Example

### Password Pattern Analysis

**Endpoint**

```
POST /api/analyze
```

**Request**

```json
{
  "password": "Password123!"
}
```

**Response**

```json
{
  "segments": [
    {
      "segment": "Password",
      "type": "letters",
      "weakness": "dictionary word"
    },
    {
      "segment": "123",
      "type": "digits",
      "weakness": "sequential pattern"
    }
  ]
}
```

---

#  🔮 Future Improvements

Potential enhancements include:

- Browser extension for password strength detection
- Integration with breached password databases
- Machine learning–based password strength prediction
- Additional password cracking models
- User accounts with saved analysis history
- Mobile-friendly interface

---

# 👥 Contributors
Jesse Navarro\
Aaron Clayton
