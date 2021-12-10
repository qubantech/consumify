import {makeAutoObservable, runInAction} from "mobx";

const totalRecommendations = () => {
    const store = {
        isFetching: true,
    }

    runInAction(() => {
    })

    return makeAutoObservable(store)

}

export const storeTotalRecommendations = totalRecommendations()