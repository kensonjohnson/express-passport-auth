import { Router } from "express";
const router = Router();
import { ensureAuthenticated } from "../config/auth.js";

// Welcome Page
// router.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    name: req.user.name,
  });
});

export default router;
