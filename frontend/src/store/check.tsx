import { makeAutoObservable, runInAction } from "mobx";
import { CheckItemInterface } from "../http/models";

async function getChecks (param: string) {
    let checksList: CheckItemInterface[] = [];

    return checksList
}

const itemsInitState:CheckItemInterface[] = [
    {
        name: "Колбаса",
        price: 100
    },
    {
        name: "Пиво",
        price: 100
    },
    {
        name: "Колбаса",
        price: 100
    },
    {
        name: "Пиво",
        price: 100
    },
    {
        name: "Колбаса",
        price: 100
    },
    {
        name: "Пиво",
        price: 100
    },
];



const check = () => {
    const store = {
        isFetching: false,
        mcc: 0,
        shop: '',
        items: itemsInitState,
        total: 1000,
    }

    runInAction(() => {
    })

    return makeAutoObservable(store)

}

export const storeCheck = check()