export declare class CreatePlatformDto {
    readonly icon: string;
    readonly title: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
declare const UpdatePlatformDto_base: import("@nestjs/common").Type<Partial<CreatePlatformDto>>;
export declare class UpdatePlatformDto extends UpdatePlatformDto_base {
}
export {};
