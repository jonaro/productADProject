import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Product } from '../entity/ProductReview';

export class ProductControllerReview {

  constructor(private productRepository: Repository<Product>) {}

  async getProductReview(req: Request, res: Response) {
    const id = req.params.id;
    const product = await this.productRepository.findOne(id);
    res.send(product);
  }

}