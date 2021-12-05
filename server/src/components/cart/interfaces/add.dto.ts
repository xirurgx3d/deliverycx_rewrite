import { IsMongoIdObject } from "src/common/decorators/mongoIdValidate.decorator";

export class cartDTO {
    @IsMongoIdObject()
    public productId: UniqueId;
}
