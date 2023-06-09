import express from "express";
import config from "./config.js";
import cookieParser from "cookie-parser";
import session from "express-session";

import path from "path";

import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views/views.router.js";
import chatRouter from "./routes/views/messages.router.js";
import usersRouter from "./routes/users.router.js";
import usersViewRouter from "./routes/views/usersView.router.js";
import jwtRouter from "./routes/jwt.router.js";
import loggerTestRouter from "./routes/loggerTest.router.js";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import "./persistencia/mongodb/dbConfig.js";

import mongoStore from "connect-mongo";

import MessageManager from "./persistencia/DAO/mongoManagers/MessageManager.js";
const messageManager = new MessageManager();
import passport from "passport";
import "./passport/passportStrategies.js";
import { errorMiddleware } from "./utils/errors/errorsMiddleware.js";
import { createLog } from "./middlewares/winston.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(createLog);

app.use(
  session({
    secret: "sessionKey",
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({
      mongoUrl:
        "mongodb+srv://valeriapaulinalustres:Artemisa37@cluster0.knm2ak6.mongodb.net/ecommerce?retryWrites=true&w=majority",
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/realtimeproducts", viewsRouter);
app.use("/api/chat", chatRouter);
app.use("/api/users", usersRouter);
app.use("/api/views", usersViewRouter);
app.use("/api/jwt", jwtRouter);
app.use("/api/loggerTest", loggerTestRouter);

app.use(express.static(path.join(__dirname, "/public")));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(errorMiddleware);

const PORT = config.PORT;

const httpServer = app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto 8080");
});

const socketServer = new Server(httpServer);

const newProductsArray = [];

socketServer.on("connection", (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });

  socket.on("newProduct", (newProduct) => {
    console.log(newProduct);
    newProductsArray.push(newProduct);
    socketServer.emit("newProductsArray", newProductsArray);
  });
});

socketServer.on("connection", async (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });

  socket.emit("chat", await messageManager.getMessages());
  socket.on("update-chat", async (newMessage) => {
    await messageManager.addMessage(newMessage);
    socketServer.sockets.emit("chat", await messageManager.getMessages());
  });
});
