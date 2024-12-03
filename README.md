# Tech Quiz Test Suite

## Description

Tech Quiz Test Suite is a full-stack web application designed to provide a fun and interactive platform for users to test their knowledge on technical topics through quizzes. The application also includes a robust testing pipeline integrated with CI/CD workflows, ensuring high-quality code and deployments.

The project is deployed using Render and incorporates modern web development practices, including separate frontend and backend deployments, automated tests with Cypress, and a Git branching strategy featuring `develop` and `main` branches.

## Features

- Interactive Quizzes: Users can take quizzes on various technical topics.
- Backend API: Serves random quiz questions stored in a MongoDB Atlas database.
- Frontend: A React-based interface for users to interact with the quizzes.
- Automated Testing: Cypress tests ensure the application runs smoothly.
- Continuous Integration/Deployment: GitHub Actions workflows automate testing and deployments.
- Modern Development Practices: Split deployments, CORS implementation, and clean branching strategies.

## Technologies Used

### Frontend:
- React with Vite
- Bootstrap for UI styling

### Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM

### Testing:
- Cypress for end-to-end and component testing
- GitHub Actions for CI/CD

### Deployment:
- Render for hosting both the frontend and backend

## Installation

### Local Development

1. Clone the repository:  
   git clone <repository-url>

2. Navigate to the project directory:  
   cd Tech-Quiz-Test-Suite

3. Install dependencies for both the client and server:  
   cd client && npm install  
   cd ../server && npm install

4. Seed the database:  
   Run npm run seed from the server directory.

5. Start the server:  
   Run npm start from the server directory.

6. Start the frontend:  
   Run npm run dev from the client directory.

## Deployment

The application is deployed on Render with separate services for the frontend and backend:
- Frontend: [https://tech-quiz-test-suite-ci-cd-1.onrender.com](https://tech-quiz-test-suite-ci-cd-1.onrender.com)
- Backend: [https://tech-quiz-test-suite-ci-cd.onrender.com](https://tech-quiz-test-suite-ci-cd.onrender.com)

## Workflows

### Test Workflow
- **Trigger**: Pull requests targeting the `develop` branch.
- **Steps**:  
  1. Install dependencies for both frontend and backend.  
  2. Start backend and frontend services.  
  3. Run Cypress tests.

### Deploy Workflow
- **Trigger**: Push to `main` branch.
- **Steps**:  
  1. Trigger Render deploy hooks for both frontend and backend.  
  2. Automatically deploy changes.

## Branching Strategy

- **main**: Production-ready branch, automatically triggers deployment upon commits.  
- **develop**: Staging branch for testing and feature integration.  
- **feature branches**: Used for developing specific features before merging into `develop`.

## License

This project is licensed under the MIT License.

