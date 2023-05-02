import { Router } from "express";
import UsersManager from "../persistencia/DAO/mongoManagers/UsersManager.js";
const router = Router();
const usersManager = new UsersManager();
import passport from "passport";
import { getUsersDataController } from "../controllers/users.controller.js";

//--------registro con passport---------
router.post(
  "/registro",
  passport.authenticate("registro", {
    failureRedirect: "/api/views/errorRegistro",
    successRedirect: "/api/views/login",
    passReqToCallback: true,
  })
);

//---- login con passport------
router.post(
  "/login",
  passport.authenticate("login", {
    failureRedirect: "/api/views/errorLogin",
    // successRedirect: '/api/products',
    passReqToCallback: true,
  })
);

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.json({ message: error });
    } else {
      res.redirect("/api/views/login");
    }
  });
});

//------registro con Github

router.get(
  "/registroGithub",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/github", passport.authenticate("github"), (req, res) => {
  req.session.email = req.user.email;
  res.redirect("/api/products");
});

//--- obtener datos del usuario ---
router.get("/current", getUsersDataController);

export default router;
