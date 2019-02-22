const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const PRODUCTS = mongoose.model("products", require("./models/productModel"));
const { PORT, SESSION_SECRET, DATABASE } = require("./config/keys");

/****************************************************************************/
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },

});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else { cb(null, false); }
}

const upload = multer({ storage, limits: { fileSize: 1024 * 100 }, fileFilter })
/******************************************************************************/



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));




mongoose.connect(DATABASE, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB Databases connected")

        app.get('/products', (req, res) => {
            res.status(200).json({ message: "nur" });
        })
        app.post('/products', upload.single('productImage'), async (req, res) => {

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


        app.listen(PORT || 3000, () => {
            console.log("Listening on port " + PORT);
        });
    })
    .catch(err => console.log(err));
