const mongoose = require("mongoose");

module.exports = async () => {
	try {
		console.log("DEBUG MONGO_URI:", process.env.MONGO_URI); // 👈 ADD THIS

		const uri = process.env.MONGO_URI;

		if (!uri) {
			throw new Error("MONGO_URI is missing in .env file");
		}

		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB connected");
	} catch (error) {
		console.error("MongoDB connection failed:", error.message);
		process.exit(1);
	}
};
