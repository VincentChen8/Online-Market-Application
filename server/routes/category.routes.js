import express from 'express'
	import categoryCtrl from '../controllers/category.controller.js' 
	const router = express.Router()
	router.route('/api/Categories') 
	.get(categoryCtrl.list)
	.post(categoryCtrl.create)
	router.route('/api/Categories/:categoryId') 
	.get(categoryCtrl.read)
	.put(categoryCtrl.update) 
	.delete(categoryCtrl.remove)
	router.route('/api/Categories/find')
	.get(categoryCtrl.findCategory)

router.param('categoryId', categoryCtrl.categoryByID)
router.route('/api/Categories').post(categoryCtrl.create) 
router.route('/api/Categories').get(categoryCtrl.list)
router.param('categoryId', categoryCtrl.categoryByID)
router.route('/api/Categories/:categoryId').get(categoryCtrl.read)
router.route('/api/Categories/:categoryId').put(categoryCtrl.update)
router.route('/api/Categories/:categoryId').delete(categoryCtrl.remove)

export default router