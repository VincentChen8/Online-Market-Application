import express from 'express'
	import productCtrl from '../controllers/product.controller.js' 
	const router = express.Router()
	router.route('/api/Products') 
	.get(productCtrl.list)
	.post(productCtrl.create)
	.delete(productCtrl.removeAll);

	router.route('/api/Products/find')
	.get(productCtrl.findProduct);

	router.param('productId', productCtrl.productByID);

	router.route('/api/Products/:productId') 
	.get(productCtrl.read)
	.put(productCtrl.update) 
	.delete(productCtrl.remove);

router.route('/api/Products').post(productCtrl.create) 
router.route('/api/Products').get(productCtrl.list)
router.route('/api/Products').delete(productCtrl.removeAll)
router.param('productId', productCtrl.productByID)
router.route('/api/Products/:productId').get(productCtrl.read)
router.route('/api/Products/:productId').put(productCtrl.update)
router.route('/api/Products/:productId').delete(productCtrl.remove)
router.route('/api/Products/find').get(productCtrl.findProduct)

export default router
