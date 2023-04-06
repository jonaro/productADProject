import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Product } from '../entity/ProductReview';

export class ProductControllerReview {

  constructor(private productRepository: Repository<Product>) {}

  async getProductReview(req: Request, res: Response) {
    const prodId = req.params.id;
    const product = await this.productRepository.createQueryBuilder("product")
        .where("product.id = :id", { id: prodId }).getMany();
		
		
    res.send(product);
  }

}