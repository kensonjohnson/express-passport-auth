import express, { urlencoded } from "express";
import expressLayouts from "express-ejs-layouts";
import { set, connect } from "mongoose";
import flash from "connect-flash";
import session from "express-session";
import passport from "passport";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

// Passport config
import passportConfig from "./config/passport.js";
passportConfig(passport);

// DB Config
import { db } from "./config/keys.js";

// Connect to MongoDB
set("strictQuery", false);
connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Bodyparser middleware
app.use(urlencoded({ extended: false }));

// Express session middleware
app.use(
  session({
    secret: "My Super Secret Phrase",
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

app.listen(PORT, console.log(`Server Started on port: ${PORT}`));
