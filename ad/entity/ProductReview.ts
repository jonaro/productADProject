import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductReview {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  averageReviewScore: string;

  @Column()
  reviewNumbers: string;
  
  @Column()
  description: string;
  
  @Column()
  creationDate: string;
  
  @Column()
  updateDate: string;

}