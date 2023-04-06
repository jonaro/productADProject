import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Product } from '../entity/ProductReview';

export class ProductControllerReviews {

  constructor(private productRepository: Repository<Product>) {}

    async getProductReviews(req: Request, res: Response) {
    const products = await this.productRepository.find();
    res.send(products);
  }

}