import { makeAutoObservable, runInAction } from "mobx";

const profile = () => {
    const store = {
        isFetching: false,
        id: 0,
        checks: [],
    }

    runInAction(() => {
    })

    return makeAutoObservable(store)

}

export const storeProfile = profile()