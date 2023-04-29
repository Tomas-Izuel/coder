import jwt from "jsonwebtoken";

export const jwtValidator = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const verifiedUser = jwt.verify(token, "secretJWT");
    if (verifiedUser) {
      req.user = verifiedUser.user;
      res.cookie("user", verifiedUser);
      res.locals.user = verifiedUser;
      next();
    } else {
      res.render("error", { error: "No estas autorizado" });
    }
  } catch (error) {
    res.render("error", { error: "No estas autorizado" });
  }
};
