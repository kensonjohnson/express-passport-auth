# express-passport-auth

This is a user login and registration app using Node.js, Express, Passport, Mongoose, EJS and some other packages.

## Setup

### Clone the repo and cd into the directory.

```sh
$ git clone https://github.com/kensonjohnson/express-passport-auth.git
```

### Install packages:

```sh
$ npm install
```

### Prepare MongoDB Connection File

Create a file in the root directory called .env and add the following:

```
DB_CLUSTER_NAME=YOUR_CLUSTER_NAME.mongodb.net
DB_NAME=YOUR_DB_NAME
DB_USER=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_USER_PASSWORD
```

Replace CLUSTER_NAME with your MongoDB URI, local or Atlas information.
Replace YOUR_DB_NAME with the database on that cluster you want to use.
Replace YOUR_DB_USERNAME and YOUR_DB_USER_PASSWORD with admin user info for that database.

If you haven't already done so, you should add 0.0.0.0/0 to the allowed IP list until development is done. REMEMBER TO CHANGE THIS TO YOUR SERVER IP UPON DEPLOYMENT.

## Usage

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
```
