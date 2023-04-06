import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Product } from '../entity/ProductReview';

export class UpdateProductController {

  constructor(private productRepository: Repository<Product>) {}

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

}