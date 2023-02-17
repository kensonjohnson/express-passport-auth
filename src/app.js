import express, { urlencoded } from "express";
import expressLayouts from "express-ejs-layouts";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { set, connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import flash from "connect-flash";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

// Passport config
import passportConfig from "./config/passport.js";
passportConfig(passport);

// Connect to MongoDB
const mongoDB = process.env.MONGO_URI;
set("strictQuery", false);
const clientPromise = connect(mongoDB)
  .then((m) => {
    console.log("Connected to MongoDB");
    return m.connection.getClient();
  })
  .catch((err) => console.log(err));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Change default views folder
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "/views"));

// Bodyparser middleware
app.use(urlencoded({ extended: false }));

// Express session middleware
app.use(
  session({
    secret: process.env.SECRET_PHRASE,
    store: MongoStore.create({
      clientPromise: clientPromise,
    }),
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect flash middleware
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
