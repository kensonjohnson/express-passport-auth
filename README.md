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

Create a file in config called keys.js and add the following:

```
dbPassword = 'mongodb+srv://YOUR_USERNAME:'+ encodeURIComponent('YOUR_PASSWORD') + '@CLUSTER_NAME.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};
```

Replace YOUR_USERNAME, YOUR_PASSWORD, and CLUSTER_NAME with your MongoDB URI, local or Atlas information.

## Usage

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
```
