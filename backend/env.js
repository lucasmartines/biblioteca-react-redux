module.exports = {
    PORT: process.env.PORT || 3000,
    base: __dirname,
    mongoose_url: process.env.MONGO_URL || 'mongodb://localhost/bookdb'
}