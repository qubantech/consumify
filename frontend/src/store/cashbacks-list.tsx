import { makeAutoObservable, runInAction } from 'mobx';

const TempData = [
    {
        image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
        label: 'Супермаркеты',
        value: 'Супермаркеты',
        description: '199 рублей, MCC 5541',
    },
    {
        image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
        label: 'Carol Miller',
        value: 'Carol Miller',
        description: 'One of the richest people on Earth',
    },
    {
        image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
        label: 'Homer Simpson',
        value: 'Homer Simpson',
        description: 'Overweight, lazy, and often ignorant',
    },
    {
        image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
        label: 'Spongebob Squarepants',
        value: 'Spongebob Squarepants',
        description: 'Not just a sponge',
    }
]


export const CashBacksList = () => {
    const store = {
        isOpen: false,
        setIsOpen(st: boolean) {
            store.isOpen = st
            console.log(store.isOpen)
        },
        confirmDelete: -1,
        setConfirmDelete(id: number) {
            store.confirmDelete = id
        },
        deleteSubscription(id: number) {
            store.confirmDelete = -1
            //...
        },

        subscriptionsAllList: TempData,

        subscriptionsUserList: null,
        partnersUserList: null,

    }

    runInAction(() => {
    })

    return makeAutoObservable(store)
}

export const storeCashBacks = CashBacksList()