# Lern_Automation – Playwright Automation Framework

A UI test automation framework built using **Playwright with JavaScript**, following the **Page Object Model (POM)** design pattern.

This project aims to provide a structured, reusable, and maintainable approach to automating web application testing.

## 🚀 Tech Stack

- **Automation Tool:** Playwright
- **Programming Language:** JavaScript
- **Runtime:** Node.js
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Version Control:** Git & GitHub
- **CI/CD:** GitHub Actions (planned)

## 📁 Project Structure

```text
Lern_Automation/
│
├── pages/
│   ├── homepage.js
│   ├── loginpage.js
│   └── practisepage.js
│
├── tests/
│   ├── login.spec.js
│   └── practise.spec.js
│
├── testdata/
│
├── workflow/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## ⚙️ Prerequisites

Before running this project, make sure you have installed:

- Node.js (LTS version recommended)
- npm
- Visual Studio Code (recommended)
- Git

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Bharatjogarana/Lern_Automation.git
```

### 2. Navigate to the project directory

```bash
cd Lern_Automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Run tests with a specific browser

```bash
npx playwright test --project=chromium
```

## 📊 Test Reports

Generate and view the Playwright HTML report:

```bash
npx playwright show-report
```

The HTML report provides test execution details, including passed tests, failed tests, and execution information.

## 🏗️ Framework Design

This framework follows the Page Object Model (POM) design pattern.

**Pages**

Contains reusable page classes and methods for interacting with application elements.

**Tests**

Contains test specifications and validation logic.

**Testdata**

Stores reusable test data separately from test scripts.

**Workflow**

Reserved for automation workflow and CI/CD-related configurations.

**Playwright Config**

Contains browser configuration, execution settings, timeouts, reporting, and other test runner settings.

## 🎯 Key Objectives

- Build a maintainable UI automation framework.
- Implement reusable page objects.
- Use reliable Playwright locators.
- Validate application functionality through automated test cases.
- Generate execution reports.
- Improve automation coverage.
- Explore CI/CD integration using GitHub Actions.

## 🔮 Future Enhancements

- API automation testing.
- Cross-browser testing.
- Data-driven testing.
- Environment-based configuration.
- Screenshot and video capture on failures.
- Authentication and session management.
- GitHub Actions CI/CD integration.
- Integration of AI-assisted testing capabilities.

## 👨‍💻 Author

**Bharat Jogarana**

Senior QA Engineer | Software Quality Assurance | Test Automation

Skills:
- Playwright with JavaScript
- Selenium with Python
- API Testing
- Manual & Functional Testing
- Regression Testing
- Database Testing
- Agile Methodology

## 📌 Repository

GitHub: https://github.com/Bharatjogarana/Lern_Automation.git

---

*This is a learning and continuous improvement project focused on building practical Playwright automation skills and developing a scalable automation framework.*
