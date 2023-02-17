# express-passport-auth

This is a user login and registration app using Node.js, Express, Passport, Mongoose, EJS.  
I built this to be integrated into this project: [Carpooly](https://github.com/kensonjohnson/carpooly "Link to GitHub Repo").

## Setup

### Clone the Repo:

```sh
$ git clone https://github.com/kensonjohnson/express-passport-auth.git
```

<br />

### Navigate to Project and Install Packages:

```sh
$ cd express-passport-auth
$ npm install
```

<br />

### Prepare MongoDB Connection File

Create a file in the root directory called .env and add the following:

```
MONGO_URI=YOUR_MONGODB_CONNECT_URI
SECRET_PHRASE=YOUR_SECRET_PHRASE
# Optional, remove to use default port of 5000
PORT=YOUR_CUSTOM_PORT
```

Replace `MONGO_URI` with the "connect" URI given by your MongoDB provider.  
In my testing I used Mongo Atlas.
In my demo I use a MongoDB instance on the server.

Replace `YOUR_SECRET_PHRASE` with literally any string you want.
Wrap in quotes if more than one word.

Optionally, you can add a `PORT` variable and set it to whatever port you would like.
You can remove the PORT variable altogether to use the default port of `5000`.

For Mongo Atlas users:

- If your IP doesn't change often, it is ok to simply add your IP to the allowed IP list in Atlas.

- If your IP changes a lot (like mine), you may need to add 0.0.0.0/0 to the allowed IP list until development is done.
  This allows connection from any IP.

Remember to change this to your server's IP upon deployment.

<br />

## Usage

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
# or on whichever port you set.
```
