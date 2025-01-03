# Communication Tracker

Communication Tracker is a React-based web application designed to help businesses manage and track communications with various companies. The application provides features for logging communications, scheduling follow-ups, maintaining a comprehensive company database and also provide notification for over due communication.

## Github Link
https://github.com/PUTTAVENKATASIVA/ENTNT_PROJECT

## Deployment Link
https://shimmering-jalebi-13592f.netlify.app/
## Prerequisites
* Node.js (v16.0.0 or later)

* npm (v8.0.0 or later)

* A modern web browser

## Setup and Installation

Use the package manager npm to install Communication Tracker.

## 1. Clone the Repository

```bash
git clone https://github.com/PUTTAVENKATASIVA/ENTNT_PROJECT
cd ENTNT_PROJECT
```

## 2. Install Dependencies

```bash
npm install
```
## 3. Run the Application
```bash
# Development Mode
npm start

# Production Build
npm run build
```

## Deployment

**Netlify**

To deploy this project run
```bash
npm run build
```

Then Upload build file to Netlify

## Application Functionality

**Key Features**

* **Dashboard Views**
    * Overview of communication status for each company
    * Users can select a specific company or multi-select multiple companies to log communication and 
    * When hovering over a completed communication, a tooltip will display the notes or comments recorded for that communication.


* **Admin Module**
    * Add new companies
    * Manage communication methods

   ![alt text](https://i.postimg.cc/htmpqRH6/Screenshot-2024-12-03-222813.png)
  ![alt text](https://i.postimg.cc/Y0JYXhq9/Screenshot-2024-12-03-223030.png)

* **Calendar View**
    * View Past Communications
    * View and manage Upcoming Communications

   ![alt text](https://i.postimg.cc/MH4bh9tz/Screenshot-2024-12-03-222930.png)
   
* **Company List**
    * View All the companies
    * Edit and delete companies

   ![alt text](https://i.postimg.cc/hj200Ddz/Screenshot-2024-12-03-222846.png)

* **Notification**
    * The notification icon display a badge with the count of overdue and due communications
    * View all overdue and due communications by clicking the icon
 
  ![alt text](https://i.postimg.cc/1RYHnzSb/Screenshot-2024-12-03-223001.png)

## Known Limitations
* No built-in authentication system
* Relies on client-side state management
* No persistent data storage (requires backend integration)

## Technology Stack
* React.js
* React Router
* Context API for state management
* Lucide React for icons
* CSS for styling
* used react-big-calendar for calendar view

## Future Roadmap
* Implement user authentication
* Add backend database integration
* Develop reporting and analytics features


## Contact
PUTTA VENKATASIVA - shivavenkat404@gmail.com

Deployed Project Link: https://shimmering-jalebi-13592f.netlify.app/

