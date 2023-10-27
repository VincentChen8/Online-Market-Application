import express from 'express'
	import productCtrl from '../controllers/product.controller.js' 
	const router = express.Router()
	router.route('/api/Product') 
	.get(productCtrl.list)
	.post(productCtrl.create)
	router.route('/api/Product/:productId') 
	.get(productCtrl.read)
	.put(productCtrl.update) 
	.delete(productCtrl.remove)
	router.route('/api/Product/find')
	.get(productCtrl.findProduct)

router.param('productId', productCtrl.productByID)
router.route('/api/Product').post(productCtrl.create) 
router.route('/api/Product').get(productCtrl.list)
router.param('productId', productCtrl.productByID)
router.route('/api/Product/:productId').get(productCtrl.read)
router.route('/api/Product/:productId').put(productCtrl.update)
router.route('/api/Product/:productId').delete(productCtrl.remove)

export default router
