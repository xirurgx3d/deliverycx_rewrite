import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/modules/database.module";
import { categoryProviders } from "src/components/category/providers/category.provider";
import { CategoryUsecase } from "src/components/category/usecases/category.usecase";
import { ICategoryRepository } from "src/components/category/repositories/interface.repository";
import { CategoryRepository } from "src/components/category/repositories/base.repository";
import { CategoryController } from "src/components/category/controllers/category.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController],
    providers: [
        CategoryUsecase,
        {
            provide: ICategoryRepository,
            useClass: CategoryRepository
        },
        ...categoryProviders
    ]
})
export class CategoryModule {}
