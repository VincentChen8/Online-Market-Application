import Category from '../models/category.model.js'
	import extend from 'lodash/extend.js'
	import errorHandler from './error.controller.js'

		const create = async (req, res) => { 
			const category = new Category(req.body); 
			try {
				await category.save()
				return res.status(200).json({ 
					message: 'Category created Successfully!',
				});
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err), 
				});
			} 
		};
	
		const categoryByID = async (req, res, next, id) => { 
			try {
				let category = await Category.findById(id); 
				if (!category) {
					return res.status(400).json({ 
						error: 'Category not found',
					});
				}
				req.category = category; 
				next();
			} catch (err) {
				return res.status(400).json({ 
					error: 'Could not retrieve category',
				}) 
			}
		}
			const read = (req, res) => {
					return res.json(req.category); 
			};

		const list = async (req, res) => { 
			try {
				let category = await Category.find().select('name created updated'); 
				res.json(category);
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err), 
				});
			} 
		};

		const update = async (req, res) => { 
			try {
				let category = req.category;
				category = extend(category, req.body); 
				category.updated = Date.now(); 
				await category.save();
				res.json(category); 
			} catch (err) {
				return res.status(400).json({
					error: errorHandler.getErrorMessage(err), 
				});
			} 
		};

		const remove = async (req, res) => { 
			try {
				let category = req.category;
				await category.deleteOne(); 
				res.json({ message: 'category removed' }); 
			} catch (err) {
				return res.status(400).json({error: errorHandler.getErrorMessage(err) });
			} 
		};
	
		const findCategory = async(req,res)=> {
			try{
				const searchWord = req.query.name;
				const category = await Category.find({name:{$regex: searchWord, $options: "i"},});
				return res.status(200).json(category);
			}catch(err){
				return res.status(500).json({error:"Error finding category"});
			}
		};

		export default { create, categoryByID, read, list, remove, update, findCategory }
