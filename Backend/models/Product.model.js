const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: {
        type: String,
    },
    images: [],
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    listPrice: {
        type: Number,
    },
    brand: {
        type: String,
    },
    category: {
        type: String,
        enum: [
            "electronics",
            "headphones",
            "speakers",
            "3d printer",
            "powerbank",
            "e-bikes",
            "gaming",
            "sports",
            "watches",
            "computer",
            "laptop",
        ],
    },
    onSale: Boolean,
});
const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };