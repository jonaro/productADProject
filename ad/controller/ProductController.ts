import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Product } from '../entity/ProductReview';

export class ProductController {

  constructor(private productRepository: Repository<Product>) {}

  async createProductReview(req: Request, res: Response, user: User) {
    const { averageReviewScore, reviewNumbers, description } = req.body;
    const product = new Product();
    product.averageReviewScore = averageReviewScore;
    product.reviewNumbers = reviewNumbers;
    product.description = description;
    product.password = password;
	product.creationDate = Date.now();
	product.User = user;
		
    const newProduct = await this.productRepository.save(product);
    res.send(newProduct);
  }

  async getProductReviews(req: Request, res: Response) {
    const products = await this.productRepository.find();
    res.send(products);
  }

  async getProductReview(req: Request, res: Response) {
    const id = req.params.id;
    const product = await this.productRepository.findOne(id);
    res.send(product);
  }

  async updateProductReview(req: Request, res: Response) {
    const id = req.params.id;
    const { averageReviewScore, reviewNumbers, description } = req.body;
    const product = await this.productRepository.findOne(id);
    product.averageReviewScore = averageReviewScore;
    product.reviewNumbers = reviewNumbers;
    product.description = description;
    product.password = password;
	product.updateDate = Date.now();
    const updatedProduct = await this.productRepository.save(product);
    res.send(updatedProduct);
  }

  async deleteProductReview(req: Request, res: Response) {
    const id = req.params.id;
    const product = await this.productRepository.findOne(id);
    const deletedProduct = await this.productRepository.remove(product);
    res.send(deletedProduct);
  }

}