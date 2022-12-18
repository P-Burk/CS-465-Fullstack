# CS-465 Full Stack Development I

## Architecture

- **Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**
  
  - We used Express HTML for the customer facing frontend website. This, paired with Handlebars, allowed us to make templates for each page and some partial templates that could be used by multiple pages. JavaScript was used throughout the project in routers, controllers, and models. For our single-page application (SPA), we used AnglularJS to help us easily create different components and modules. 

- **Why did the backend use a NoSQL MongoDB database?**

  - MongoDB was used for the backend database because it’s free and allowed us to easily use many different schemas for database documents based on what kind of data we were adding to the database. Furthermore, we used Mongoose to connect our Node.JS server to the database and Seedgoose to pre-seed some database information. Mongoose is a JavaScript library which made it easy to implement since much of the project was done in JavaScript and we were using a Node.JS server.


## Functionality

- **How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**
  
  - JavaScript is a programing language while JSON (JavaScript Object Notation) is a file format used for storing data. JSON allows us to use data in an almost “universal” format that can be easily parsed by both the frontend and backend. This eliminates the need to format data as it passes from the frontend to the backend or vice versa.

- **Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.**
  
  - In this project, we used many different components when creating the SPA. This made it easy to reuse things such as the edit and delete buttons/functionality on multiple trip cards. This also makes it easier when it comes to making changes for a component. You don’t need to change the edit functionality for every single card, you simply just have to make the change in the edit-trip component. 


## Testing

- **Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.**
  
  - The app uses various methods to interact with the database such as GET, POST, PUT, and DELETE. These methods are tied to endpoints. An endpoint is basically a specialized URL for a service that takes in and/or retrieves data. For example, with our project, we use a GET method with the endpoint of /api/trips/<trip code>. This API call takes the trip code, looks it up in the database, and returns the information associated with that trip code. Some API endpoints are used for adding, altering, or deleting data from the database. You obviously don’t want just anyone to have access to these endpoints, so you secure them with authentication. This makes it so that when an endpoint is used, the user sending the API is authenticated before the method is performed. For this application, I tested all my API’s endpoints both through using the application and via an extension in VS Code, like the Postman program, called Thunder Client.


## Reflection

- **How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**
  
  - I feel that this course has taught me valuable knowledge that I can use in my pursuit of making a career shift into software engineering. During this course we learned how to tie a frontend website to a backend database using APIs. This is something I hadn’t done prior to this class, and I found it to be very interesting and intuitive for tasks such as adding, updating, retrieving, and deleting data from a database. I had also never used AngularJS before this course. I really like how easy it was to add components and modules via Angular. Overall, I feel that this course was one of the more real-world applicable ones and I am already thinking about how I will apply what I learned to my own personal projects.
