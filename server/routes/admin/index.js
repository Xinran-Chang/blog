module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Article = require("../../models/Article")
    const Category = require("../../models/Category")
    const AdminUser = require("../../models/AdminUser")
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')

    app.use('/admin/api', router)

    //登录校验中间件
    const auth = async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请提供jwt token')
        const { id } = jwt.verify(token, app.get('secret'))
        assert(id, 401, '无效的jwt')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
        await next()
    }
    //文章创建
    router.post('/articles', auth, async (req, res) => {
        await Article.create(req.body)
        res.send("save success!")
    })
    //文章列表
    router.get('/articles', auth, async (req, res) => {
        let list = await Article.find().populate('category')
        res.send(list)
    })
    //文章修改
    router.put('/articles/:id', auth, async (req, res) => {
        let article = await Article.findByIdAndUpdate(req.params.id, req.body)
        res.send(article)
    })
    //文章删除
    router.delete('/articles/:id', auth, async (req, res) => {
        await Article.findByIdAndDelete(req.params.id, req.body)
        res.send("delete success!")
    })
    //文章修改详情
    router.get('/articles/:id', auth, async (req, res) => {
        let article = await Article.findById(req.params.id)
        res.send(article)
    })
    //分类创建
    router.post('/categories', auth, async (req, res) => {
        await Category.create(req.body)
        res.send('save success!')
    })
    //分类列表
    router.get('/categories', auth, async (req, res) => {
        let category = await Category.find()
        res.send(category)
    })
    //分类修改
    router.put('/categories/:id', auth, async (req, res) => {
        let category = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.send(category)
    })
    //分类删除
    router.delete('/categories/:id', auth, async (req, res) => {
        await Category.findByIdAndDelete(req.params.id, req.body)
        res.send('delete success!')
    })
    //分类修改详情
    router.get('/categories/:id', auth, async (req, res) => {
        let category = await Category.findById(req.params.id)
        res.send(category)
    })
    //管理员创建
    router.post('/admin_users', auth, async (req, res) => {
        await AdminUser.create(req.body)
        res.send('save success!')
    })
    //管理员列表
    router.get('/admin_users', auth, async (req, res) => {
        let item = await AdminUser.find()
        res.send(item)
    })
    //管理员修改
    router.put('/admin_users/:id', auth, async (req, res) => {
        let item = await AdminUser.findByIdAndUpdate(req.params.id, req.body)
        res.send(item)
    })
    //管理员删除
    router.delete('/admin_users/:id', auth, async (req, res) => {
        await AdminUser.findByIdAndDelete(req.params.id, req.body)
        res.send('delete success!')
    })
    //管理员修改详情
    router.get('/admin_users/:id', auth, async (req, res) => {
        let item = await AdminUser.findById(req.params.id)
        res.send(item)
    })
    //背景图片上传
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', auth, upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        //1.根据用户名找用户
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 422, '用户不存在')
        //2.校验密码
        const isVaild = require('bcrypt').compareSync(password, user.password)
        assert(isVaild, 422, '密码错误')
        //3.返回token
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({ token })
    })
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}