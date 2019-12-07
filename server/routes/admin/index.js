module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Article = require("../../models/Article")
    const Category = require("../../models/Category")
    app.use('/admin/api', router)
    //文章创建
    router.post('/articles', async (req, res) => {
        await Article.create(req.body)
        res.send("save success!")
    })
    //文章列表
    router.get('/articles', async (req, res) => {
        let list = await Article.find().populate('category')
        res.send(list)
    })
    //文章修改
    router.put('/articles/:id', async (req, res) => {
        let article = await Article.findByIdAndUpdate(req.params.id, req.body)
        res.send(article)
    })
    //文章删除
    router.delete('/articles/:id', async (req, res) => {
        await Article.findByIdAndDelete(req.params.id, req.body)
        res.send("delete success!")
    })
    //文章修改详情
    router.get('/articles/:id', async (req, res) => {
        let article = await Article.findById(req.params.id).populate('category')
        res.send(article)
    })
    //分类创建
    router.post('/categories',async (req,res)=>{
        await Category.create(req.body)
        res.send('save success!')
    })
    //分类列表
    router.get('/categories',async (req,res)=>{
        let category = await Category.find()
        res.send(category)
    })
    //分类修改
    router.put('/categories/:id',async (req,res)=>{
        let category = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(category)
    })
    //分类删除
    router.delete('/categories/:id',async(req,res)=>{
        await Category.findByIdAndDelete(req.params.id,req.body)
        res.send('delete success!')
    })
    //分类修改详情
    router.get('/categories/:id', async (req, res) => {
        let category = await Category.findById(req.params.id)
        res.send(category)
    })
}