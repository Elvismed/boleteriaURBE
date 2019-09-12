process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.PORT = process.env.PORT || 3000;

// JWT Configuration
process.env.SECRET_KEY = process.env.SECRET_KEY || 'dbgtst';
process.env.TOKEN_EXPIRY = 1000 * 60 * 60 * 24 * 7;