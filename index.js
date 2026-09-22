const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");
        console.log("MongoDB Connected Successfully");

        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            stock: Number
        });

        const Product = mongoose.model("Product", productSchema);

        const product = new Product({
            name: "Wireless Mouse",
            price: 799,
            stock: 120
        });

        await product.save();

        const result = await Product.updateOne(
            { name: "Wireless Mouse" },
            { $set: { price: 899 } }
        );

        console.log("Updated Result:", result);

        await mongoose.connection.close();
    } catch (error) {
        console.log("Connection or operation failed:", error);
    }
}

main();

