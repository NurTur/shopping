const express = require('express');
const app = express();
const Router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const fs = require('fs');

const PRODUCTS = mongoose.model("products", require("./models/productModel"));
const USERS = mongoose.model("users", require("./models/usersModel"));
const UserRoute = require('./routes/usersRoute');
const Auth = require('./auth/auth');


const { PORT, SESSION_SECRET, DATABASE } = require("./config/keys");

/****************************************************************************/
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },

});

const upload = multer({ storage })
/******************************************************************************/
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

/*********************************************/


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));



mongoose.connect(DATABASE, { useNewUrlParser: true });

app.get('/api/users', async (req, res) => {
    const Users = await USERS.find({});
    res.status(200).json(Users);
});

app.post('/api/deleteImages', async (req, res) => {
    req.body.forEach(e => {
        fs.unlinkSync(e);
    });
    res.status(200).json({ message: "Files deleted" });
});

app.post('/api/productsWithPhoto', upload.single('productImage'), async (req, res) => {

    const newdata = {
        _IdUser: req.body._id,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productCategory: req.body.productCategory,
        productPrice: req.body.productPrice,
        productValuta: req.body.productValuta,
        Date: Date.now(),
        productImage: req.file.path
    }

    const User = await USERS.findById(req.body._id);
    User.products = [...User.products, newdata];
    await User.save();
    res.status(201).json(newdata);
})

app.post('/api/productsOutPhoto', async (req, res) => {
    const newdata = {
        _IdUser: req.body._id,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productCategory: req.body.productCategory,
        productPrice: req.body.productPrice,
        productValuta: req.body.productValuta,
        Date: Date.now(),
        productImage: "dist\\images\\NoImageAvailable.jpg"
    }
    const User = await USERS.findById(req.body._id);
    User.products = [...User.products, newdata];
    await User.save();
    res.status(201).json(newdata);
});


Auth(USERS);
UserRoute(Router, USERS);
app.use("/api/user", Router);

app.listen(PORT || 3000, () => {
    console.log("Listening on port " + PORT);
});





/*mongoose.connect(DATABASE, { useNewUrlParser: true });
    .then(() => {
        console.log("MongoDB Databases connected")

        app.get('/api/products', async (req, res) => {
            const product = await PRODUCTS.find({});
            res.status(200).json(product);
        });

        app.post('/api/productsWithPhoto', upload.single('productImage'), async (req, res) => {

            const newdata = {
                productName: req.body.productName,
                productDescription: req.body.productDescription,
                productCategory: req.body.productCategory,
                productPrice: req.body.productPrice,
                productImage: req.file.path
            }

            const addProduct = new PRODUCTS(newdata);
            await addProduct.save();
            res.status(201).json({ message: "advert added" });
        })

        app.post('/api/productsOutPhoto', async (req, res) => {
            const newdata = {
                productName: req.body.productName,
                productDescription: req.body.productDescription,
                productCategory: req.body.productCategory,
                productPrice: req.body.productPrice,
                productImage: "uploads\\NoImageAvailable.jpg"
            }
            const addProduct = new PRODUCTS(newdata);
            await addProduct.save();
            res.status(201).json({ message: "advert added" });
        });


        Auth(USERS);
        Route(Router, USERS);
        app.use("/api/user", Router);

        app.listen(PORT || 3000, () => {
            console.log("Listening on port " + PORT);
        });
    })
    .catch(err => console.log(err));*/
