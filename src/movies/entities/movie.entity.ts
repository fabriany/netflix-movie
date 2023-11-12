import { Platform } from '../../platforms/entities/platform.entity'
import { Review } from '../../reviews/entities/review.entity'

export class Movie {
    id: number;
	title: string;
	slug: string;
	image: string;
    director: string;
	platforms: Platform[];
	score: number;
    createdAt: Date;
    updatedAt: Date;
	reviews: Review[];
}