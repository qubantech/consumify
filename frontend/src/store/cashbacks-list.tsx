import {makeAutoObservable, runInAction} from "mobx";

export const CashBacksList = () => {
    const store = {
        isOpen: false,
        setIsOpen (st:boolean) {
            store.isOpen = st
            console.log(store.isOpen)
        }
    }

    runInAction(() => {
    })

    return makeAutoObservable(store)
}

export const storeCashBacks = CashBacksList()