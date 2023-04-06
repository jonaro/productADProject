export class ProductControllerCreation {

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

}