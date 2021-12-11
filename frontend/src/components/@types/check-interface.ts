import { CheckItemInterface } from "./check-item-interface";

export interface CheckInterface {
    mcc: number,
    shop: string,
    items: Array<CheckItemInterface>
}