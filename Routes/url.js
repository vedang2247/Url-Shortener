const express=require("express")
const { handleGenerateShortURL,handleAnalytics } = require("../Controllers/url")
const { model } = require("mongoose")

const router=express.Router()

router.post("/",handleGenerateShortURL)

router.get("/analytics/:id",handleAnalytics)

module.exports=router