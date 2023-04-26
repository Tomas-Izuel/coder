import express from "express";
import config from "./config.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoStore from "connect-mongo";
import path from "path";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import "./persistencia/dbConfig.js";

// RUTAS
import autRouter from "./routes/auth.route.js";
import productsRouter from "./routes/products.route.js";
import cartsRouter from "./routes/cart.route.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//  Session con Mongo
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: new mongoStore({
//       mongoUrl: process.env.MONGOURL,
//     }),
//   })
// );

app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/auth", autRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartsRouter);

//motores de plantilla
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

const PORT = config.PORT;

const httpServer = app.listen(PORT, () => {
  console.log("");
  console.log(
    "\u001b[" +
      34 +
      "m" +
      `      * Server runing on: http://localhost:${PORT}` +
      "\u001b[0m"
  );
  console.log("");
});
