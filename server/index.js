const express = require('express')
const { read } = require('fs')
const path = require('path')

const app = express()

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"))
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../classes.html"))
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../followers.html"))
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../items.html"))
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../weapons.html"))
})

app.get('/css', function(req, res){
    res.sendFile(path.join(__dirname, "../styles.css"))
})

app.get('/js', function(req, res){
    read.sendFile(path.join(__dirname, "../main.js"))
})

const port = process.env.PORT || 4567

app.listen(port, () => console.log (`Take us to warp ${port}`))