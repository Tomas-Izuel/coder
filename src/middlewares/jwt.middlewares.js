import jwt from "jsonwebtoken";

export const jwtValidator = (req, res, next) => {
  const token = req.cookies.token;
  const verifiedUser = jwt.verify(token, "secretJWT");
  if (verifiedUser) {
    req.user = verifiedUser.user;
    res.cookie("user", verifiedUser);
    next();
  } else {
    res.json({ message: "Authentication error" });
  }
};
