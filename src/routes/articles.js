const router = require('express').Router()
const ctrl = require('../controllers/articlesController')
const upload = require('../middleware/upload')

router.get('/', ctrl.getAll)
router.get('/featured', ctrl.getFeatured)
router.get('/latest', ctrl.getLatest)
router.get('/search', ctrl.search)
router.get('/category/:categorySlug', ctrl.getByCategory)
router.get('/id/:id', ctrl.getById)
router.get('/:slug', ctrl.getBySlug)

router.post('/', upload.single('image'), ctrl.create)
router.put('/:id', upload.single('image'), ctrl.update)
router.delete('/:id', ctrl.remove)

module.exports = router
