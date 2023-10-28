import Product from '../models/product.model.js'
	import extend from 'lodash/extend.js'
	import errorHandler from './error.controller.js'

		const create = async (req, res) => { 
			const product = new Product(req.body); 
			try {
				await product.save()
				return res.status(200).json({ 
					message: 'Product created Successfully!',
				});
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err), 
				});
			} 
		};
	
		const productByID = async (req, res, next, id) => { 
			try {
				let product = await Product.findById(id); 
				if (!product) {
					return res.status(400).json({ 
						error: 'Product not found',
					});
				}
				req.profile = product; 
				next();
			} catch (err) {
				return res.status(400).json({ 
					error: 'Could not retrieve product',
				}) 
			}
		}
			const read = (req, res) => {
					return res.json(req.profile); 
			};

		const list = async (req, res) => { 
			try {
				let product = await Product.find().select('name description price quantity category created updated'); 
				res.json(product);
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err), 
				});
			} 
		};

		const update = async (req, res) => { 
			try {
				let product = req.product;
				product = Object.assign(product, req.body); 
				product.updated = Date.now(); 
				await product.save();
				res.json(product); 
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err), 
				});
			} 
		};

		const remove = async (req, res) => { 
			try {
				let product = req.product;
				await product.deleteOne(); 
				res.json({ message: 'Product removed' }); 
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err) 
				});
			} 
		};

		const removeAll = async (req, res) => { 
			try {
				let product = req.product;
				await product.deleteAll(); 
				res.json({ message: 'All products removed' }); 
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err) 
				});
			} 
		};
	
		const findProduct = async(req,res)=> {
			try{
				const searchWord = req.query.name;
				const product = await Product.find({name:{$regex: searchWord, $options: "i"},});
				return res.status(200).json(product);
			}catch(err){
				return res.status(500).json({
					error:"Error finding product"
				});
			}
		};

		export default { create, productByID, read, list, update, remove, removeAll, findProduct }
