# Social Media Networking API

Built with TypeScript, API offers secure and efficient endpoints for user authentication, post creation, and following/unfollowing other users.

## Features

### User Authentication
- Developers can implement secure user authentication using JSON Web Tokens (JWT), allowing users to securely log in and sign up for accounts.

### Post Creation
- Users can create posts with text, images, sharing their thoughts and experiences with their followers.

### Following/Unfollowing
- Users can follow or unfollow other users, enabling them to curate their social media feed and stay updated with the content they find interesting.

## Technology Stack

- **TypeScript:** Leveraging the benefits of static typing and modern ECMAScript features for robust and maintainable code.
- **Express.js:** Building a fast and scalable API server with the popular Node.js web framework.
- **MongoDB:** Storing user data, posts, and relationship information in a flexible and scalable NoSQL database.
- **JWT Authentication:** Ensuring secure user authentication and authorization for protected endpoints.

## Usage

### Installation
- Clone this repository
- Install dependencies using `yarn install`
- Navigate to the root directory of the project
- Run `yarn run dev` to start the development server


## Environment Variables
NODE_ENV=dev
PORT=4000
MONGODB_URI=mongodb+srv://prakhar7017:mongodb123@cluster0.ablgia8.mongodb.net/Post
MONGODB_DB_NAME=Post
CLIENT_URL=http://localhost:3000
JWT_SECRET_KEY=qwertyuioasdfghjklzxcvbnm

### Documentation
For detailed documentation, please visit [Documentation Link](https://documenter.getpostman.com/view/24274037/2sA2xnwpYs).


