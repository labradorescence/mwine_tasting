# M Wine Tasting
M Wine Tasting is a wine journal web application where user can see, swirl, sniff, sip and savor a glass of wine and write about the sublime wine tasting experience.

# Getting Started
1. clone the [BACKEND REPO](https://github.com/labradorescence/mwine_tasting_backend)
2. Run the rail server `rails s -p 3001`
3. Clone this repository and cd into the directory
4. Install all dependencies `$ npm install`
5. Run the app (simultaneously running the backend rail server) `npm start`

# Features

### CRUD Operations
* User can upload a picture of the bottle to add it as a new wine to journal, which will be uploaded to the cloudinary. 
* User can add a new review with date, occasion, aroma, color, acidity level and taste. 
* User can read the previous reviews.
* User can read the wine aroma wheel as a reference.

### React
* Update the application state using React lifecycle methods
* Organize the code structure by separating components into presentation components and container components
* Implement inverse data flow to send props down and up between parent components and child components

### Asynchronous fetches
* Pulls wine reviews from the API using asynchronous fetches

### ActiveRecord Associations
* Models have `has_many` and `belongs_to` associations
* Uses ActiveModelSerializers, which turns model attributes into JSON object keys

### Tech Stack
* React.js
* Ruby on Rails API
* HTML/CSS
* Active Record

# Tools
* [Rack CORS](https://github.com/cyu/rack-cors)
* [ActiveModel::Serializer](https://github.com/rails-api/active_model_serializers)
* Semantc UI
