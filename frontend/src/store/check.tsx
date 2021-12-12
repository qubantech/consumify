import { makeAutoObservable, runInAction } from "mobx";
import {Check} from "../http/models/check-models/check";
import {checkService} from "../http/api-services/check-service";
import {storeProfile} from "./profile";

const itemsInitState:Check[] = []

async function getAllChecks () {
    let resp = await checkService.getCategories(storeProfile.id)
    return resp.data
}


const check = () => {
    const store = {
        isFetching: false,
        items: itemsInitState,
        totalCashBack: 0
    }

    runInAction(() => {
        let x = 0
        store.isFetching = true
        if (storeProfile.id != 0) {
            getAllChecks()
                .then((resp) => {
                    store.items = resp
                    store.items.forEach((item) => {
                        x+=item.positions.map(i=>x+=i.cashbackValue, x=0).reverse()[0]
                    })
                    store.totalCashBack = Number(x.toFixed(2))
                    store.isFetching = false
                })
                .catch((err)=> {})
        }
    })

    return makeAutoObservable(store)

}

export const storeChecks = check()