export declare class CreateReviewDto {
    readonly movie: string;
    readonly platform: string;
    readonly author: string;
    readonly body: string;
    readonly score: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
declare const UpdateReviewDto_base: import("@nestjs/common").Type<Partial<CreateReviewDto>>;
export declare class UpdateReviewDto extends UpdateReviewDto_base {
}
export {};
