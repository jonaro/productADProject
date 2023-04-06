import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { createConnection } from 'typeorm';
import { Product } from './entity/ProductReview';
import { ProductControllerCreate } from './controller/ProductControllerCreation';
import { DeleteProductController } from './controller/DeleteProductController';
import { ProductControllerReview } from './controller/ProductControllerCreation';
import { ProductControllerReviews } from './controller/ProductControllerCreation';
import { UpdateProductController } from './controller/UpdateProductController';


const app = express();

app.use(bodyParser.json());

createConnection().then(async connection => {

  const productRepository = connection.getRepository(Product);

  const productControllerCreate = new ProductControllerCreate(productRepository);
  const deleteProductController = new DeleteProductController(productRepository);
  const productControllerReview = new ProductControllerReview(productRepository);
  const productControllerReviews = new ProductControllerReviews(productRepository);
  const updateProductController = new UpdateController(productRepository);
  

  // Create a new product review
  app.post('/review', async (req, res) => {
	  try {
		// Get the user ID from the JWT token
		const token = req.header('Authorization').replace('Bearer ', '');
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const userId = decoded._id;

		// Find the user in the database
		const user = await User.findById(userId);

		if (!user) {
		  return res.status(401).send({ error: 'Unauthorized' });
		}
	  
		productControllerCreate.createProductReview(req, res, user));

	  } catch (e) {
		console.error(e);
		res.status(500).send();
	  }
  });	

  // Get all product reviews
  app.get('/review', (req, res) => productControllerReview.getProductReviews(req, res));

  // Get a single product review
  app.get('/reviews/:id', (req, res) => productControllerReviews.getProductReview(req, res));

  // Update a product review
  app.put('/review/:id', (req, res) => updateProductController.updateProductReview(req, res));

  // Delete a product review
  app.delete('/review/:id', (req, res) => deleteProductController.deleteProductReview(req, res));
  
  // Get all reviews
  app.get('/productEvaluation', (req, res) => productController.getProductEvaluation(req, res));

  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });

}).catch(error => console.log(error));
