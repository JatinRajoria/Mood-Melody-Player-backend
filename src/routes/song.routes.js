const express = require('express')
const multer = require('multer')
const uploadFile = require('../service/storage.service');
const router = express.Router();
const songModel = require('../models/song.model')

const upload = multer({storage:multer.memoryStorage()});

router.post('/songs', upload.single('audio'), async (req,res) => {
    try{
        if(!req.file){
            return res.status(400).json({message:"No File Uploaded"});
        }
        console.log(req.body);
        console.log(req.file);
        const fileData = await uploadFile(req.file, req.body.songName);
        const song = await songModel.create({
            songName: req.body.songName,
            singerName: req.body.singerName,
            mood: req.body.mood,
            audio: fileData.url
        })
        
        res.status(201).json({
            message:"Song Created Successfully",
            song: song
        }) ;
   } catch(error){ 
        console.log(error);
        res.status(500).json({message: "Error uploading song", error});
    }
}
)

router.get('/songs',async(req,res)=>{
    const {mood} = req.query;
    const songs = await songModel.find({
        mood: mood
    })
    res.status(200).json({
        message: "Songs Created successfully",
        songs
    })
})

module.exports = router;