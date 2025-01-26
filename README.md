# Schedulize: Smarter Automated Study Plans

Schedulize is a web application that helps students create smarter, automated study plans using linear/logarithmic models to allocate time slots.  It integrates with your Google Calendar to schedule study sessions seamlessly.

## Features

* **Intelligent Time Allocation:** Schedulize uses algorithms (linear/logarithmic models, to be further detailed in future versions) to distribute study time effectively based on assignment deadlines and estimated effort.
* **Google Calendar Integration:**  Seamlessly sync your study plan with your Google Calendar, ensuring all your commitments are in one place.
* **Assignment Management:**  Easily add, track, and manage your assignments, including deadlines, estimated time, and actual time spent.
* **Intuitive Interface:** User-friendly design for effortless study plan creation and management. (Further UI improvements are planned).
* **Customizable Routine Input:**  Input your daily routine, including sleep, wake, and meal times, to optimize your study schedule.

## Usage

1.  **Create an Account:** (Future functionality:  Currently, the application does not include user accounts.  This feature is planned for future development.)
2.  **Add Assignments:** Use the assignment form to input details about your assignments, including the assignment name, type, due date, due time, estimated study time, and actual time spent.
3.  **Input Daily Routine:** Provide your sleep, wake, and meal times.
4.  **Generate Study Plan:**  Schedulize automatically generates a study plan based on your input.
5.  **Sync with Calendar:** Your study plan will be synchronized with your Google Calendar. (Note: This integration requires Google Calendar API authorization.)

## Installation

This project consists of a frontend and a backend.  You'll need to run both to use the full application.

**Backend:**

1.  Clone the repository: `git clone <repository_url>`
2.  Navigate to the backend directory: `cd backend`
3.  Install dependencies: `npm install`
4.  Set up environment variables (`.env` file):  Requires `MONGO_URI` (MongoDB connection string) and `PORT` (port number, defaults to 5000).
5.  Start the server: `node server.js`

**Frontend:**

1.  Navigate to the frontend directory: `cd frontend`
2.  Install dependencies: `npm install`
3.  Set up environment variables (`.env` file):  Requires `REACT_APP_GOOGLE_CLIENT_ID` and `REACT_APP_GOOGLE_API_KEY` for Google Calendar integration.
4.  Start the development server: `npm start`

## Technologies Used

* **Frontend:** React, React Big Calendar, Moment.js, Create React App
    * React: JavaScript library for building user interfaces.
    * React Big Calendar:  Component for displaying and interacting with calendars.
    * Moment.js: Library for working with dates and times.
    * Create React App:  Simplified development environment for React applications.
* **Backend:** Node.js, Express.js, Mongoose, MongoDB, CORS, dotenv
    * Node.js: JavaScript runtime environment.
    * Express.js:  Web application framework for Node.js.
    * Mongoose: MongoDB object modeling tool for Node.js.
    * MongoDB: NoSQL database.
    * CORS: Enables Cross-Origin Resource Sharing.
    * dotenv: Loads environment variables from a `.env` file.
* **Google APIs:** Google Calendar API, Google Identity Services.
    * Google Calendar API: Allows access to and manipulation of Google Calendar events.
    * Google Identity Services: Manages user authentication and authorization.


## API Documentation

**Backend API Endpoints:**

`/api/assignments`

*   **POST:** Creates a new assignment.
    *   **Request Body:**
        ```json
        {
          "assignment": "String",
          "dueDate": "Date",
          "estimatedTime": "Number",
          "actualTime": "Number (optional)",
          "assignmentType": "String"
        }
        ```
    *   **Response (201):**
        ```json
        {
          // Assignment object with _id
        }
        ```
*   **GET:** Retrieves all assignments.
    *   **Response (200):**
        ```json
        [
          // Array of assignment objects
        ]
        ```

## Dependencies

The dependencies for the frontend and backend are listed in their respective `package.json` files.

## Contributing

(Contributions are welcome, but guidelines should be added here)


*README.md was made with [Etchr](https://etchr.dev)*
