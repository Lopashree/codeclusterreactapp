const express = require("express");
const app = express();
const { connection } = require("./config/db");
const { gadgetsRouter } = require("./routes/gadgets.routes");
const cors = require("cors");
const { signupRouter } = require("./routes/signup.routes");
const { loginRouter } = require("./routes/login.routes");
const { productRouter } = require("./routes/product.routes");
const { cartRouter } = require("./routes/cart.routes");
const corsOptions = require("./config/corsOptions");

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Welcome to GEEKBUYING");
});

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/products", productRouter);
app.use("/backend", gadgetsRouter);
app.use("/cart", cartRouter);
app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log("Welcome inside the backend zone of GEEKBUYING");
    } catch (e) {
        console.log("Are you a Bot.");

        console.log(e.message);
    }
    console.log(`YOUR PORT IS WORKING PROPERLY`);
});