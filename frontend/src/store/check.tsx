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
    }

    runInAction(() => {
        store.isFetching = true
        if (storeProfile.id != 0) {
            getAllChecks()
                .then((resp) => {
                    store.items = resp
                    store.isFetching = false
                })
                .catch((err)=> {})
        }
    })

    return makeAutoObservable(store)

}

export const storeChecks = check()