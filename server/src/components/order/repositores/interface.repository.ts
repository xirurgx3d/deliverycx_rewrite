import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class IOrderRepository {
    abstract create(userId: UniqueId, cartPrice: number): Promise<void>;
}
