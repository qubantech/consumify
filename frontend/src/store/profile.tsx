import { makeAutoObservable, runInAction } from "mobx";
import {getColor} from "../methods/color-picker";

const profile = () => {
    const store = {
        isFetching: false,
        id: 0,
        colorID: "red",
        setID (id:number) {
            store.id = id
            store.colorID = getColor(id, 3000)
            localStorage.setItem("ID", String(id))
        },
        quitProfile(){
            store.id = 0
        }
    }

    runInAction(() => {
        if (localStorage.getItem("ID")) store.setID(Number(localStorage.getItem("ID")))
    })

    return makeAutoObservable(store)

}

export const storeProfile = profile()