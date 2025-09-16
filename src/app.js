const express = require('express');
const songRoutes = require('./routes/song.routes')

const app = express();
app.use(express.json());
// Abhi tumne model bana liya ✅
// Ab tumko ek route banana hoga jahan se tum songs insert aur fetch kar sako, taki Compass me DB dikhne lage.
// database tabhi dikhega jab route bnaoge
app.use('/',songRoutes)

module.exports = app;