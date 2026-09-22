
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/Ecommerce"
        );

        console.log("MongoDB Connected Successfully");

        // Schema Validation + Type Options
        const bookSchema = new mongoose.Schema({
            title: {
                type: String,
                required: [true, "Book title is required"],
                minlength: [3, "Title must have at least 3 characters"],
                maxlength: [100, "Title cannot exceed 100 characters"],
                trim: true
            },

            author: {
                type: String,
                required: true,
                trim: true
            },

            price: {
                type: Number,
                required: true,
                min: [1, "Price must be greater than 0"],
                max: [10000, "Price cannot exceed 10000"]
            },

            category: {
                type: String,
                enum: ["Programming", "Fiction", "Education"],
                default: "Education"
            },

            stock: {
                type: Number,
                min: 0,
                default: 10
            }
        });

        const Book = mongoose.model("Book", bookSchema);

        // 1. INSERT BOOK
        const book = new Book({
            title: "JavaScript Basics",
            author: "Gautam Kumar",
            price: 799,
            category: "Programming",
            stock: 20
        });

        await book.save();

        console.log("Book Inserted Successfully");

        // 2. UPDATE WITH VALIDATION
        const result = await Book.updateOne(
            { title: "JavaScript Basics" },
            { $set: { price: 899 } },
            { runValidators: true }
        );

        console.log("Update Result:", result);

        // 3. VALIDATION ERROR EXAMPLE
        try {
            const invalidBook = new Book({
                title: "JS",
                author: "Gautam",
                price: -100,
                category: "Unknown"
            });

            await invalidBook.save();
        } catch (error) {
            console.log("Validation Error:", error.message);
        }

        await mongoose.connection.close();

        console.log("Connection Closed");

    } catch (error) {
        console.log("Operation Failed:", error.message);
    }
}

main();