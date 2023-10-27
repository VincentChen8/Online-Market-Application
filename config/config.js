const config = { env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://vincentchenofficial:Lamnguoitute1@marketplace.bmd0hur.mongodb.net/Marketplace?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST || 'mongodb://' + ':' + (process.env.IP || 'localhost') +'/mernproject' 
}

export default config