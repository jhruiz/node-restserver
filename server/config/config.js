// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// Bae de datos

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://root:LB7oPuoipp1DRct8@cluster0-fr7v9.mongodb.net/cafe';
}

process.env.URLDB = urlDB;