import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Product } from '../entity/ProductReview';

export class DeleteProductController {

  constructor(private productRepository: Repository<Product>) {}
  
  async deleteProductReview(req: Request, res: Response) {
    const id = req.params.id;
    const product = await this.productRepository.findOne(id);
    const deletedProduct = await this.productRepository.remove(product);
    res.send(deletedProduct);
  }

}