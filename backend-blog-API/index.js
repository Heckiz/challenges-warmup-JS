if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const { v4: uuid } = require('uuid');
const cors = require('cors');
const sequelize  = require('sequelize');

//Initialization
const app = express();
require('./database/database');

//Setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/posts'),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 
app.use(multer({storage}).single('imageUrl'));

//Routes
 app.use('/api/posts', require('./routes/posts.routes'));
 app.use('/api/categories', require('./routes/categories.routes'));
 app.use('/api/hashtags', require('./routes/hashtags.routes'));



//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Start the server
app.listen(app.get('port'), async() => {
    console.log('Server on port', app.get('port'));
    try {
        await sequelize.authenticate;
        console.log('DB is connected');
      } catch (error) {
        console.error("DB NOT connected | ERROR |", error);
      }
});