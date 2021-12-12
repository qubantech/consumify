import {makeAutoObservable, runInAction} from "mobx";
import {cashbackService} from "../http/api-services";
import {CategoryCashbackSubscriptionModel, DefaultCashbackModel, SellerCashbackModel} from "../http/models";
import {storeProfile} from "./profile";
import {categoryService} from "../http/api-services/category-service";
import {Category} from "../http/models/category-models/category";

const tempdata = [{
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
    }]

const PartnersAllListInitState: DefaultCashbackModel[] = []
const PartnersUserListInitState:SellerCashbackModel[] = []
const subscriptionsUserListInitState:CategoryCashbackSubscriptionModel[] = []
const subscriptionsAllList:Category[] = []

export const CashBacksList = () => {
    const store = {
        isFetching: false,
        isOpen: false,
        setIsOpen (st:boolean) {
            store.isOpen = st
            console.log(store.isOpen)
        },

        confirmDelete: -1,
        setConfirmDelete (id: number) {
            store.confirmDelete = id
        },
        deleteSubscription (id: number) {
            store.isFetching = true
            cashbackService.cancelSubscription(storeProfile.id, store.confirmDelete)
                .then((resp)=> {
                    store.confirmDelete = -1
                    cashbackService.getCategoryCashbackList(storeProfile.id)
                        .then((resp) => {
                            store.subscriptionsUserList = resp.data
                            store.isFetching = false
                        })
                        .catch((err) => {
                            //глобальная модалка
                        })
                })
            //...
        },

        subscriptionsAllList: subscriptionsAllList,

        subscriptionsUserList: subscriptionsUserListInitState,

        partnersUserList: PartnersUserListInitState,
        partnersAllList: PartnersAllListInitState
    }

    runInAction(() => {
        store.isFetching = true
        cashbackService.getDefaultCashbackList()
            .then((resp) => {
                store.partnersAllList = resp.data
            })
            .catch((err) => {
                //глобальная модалка
            })
        categoryService.getCategories()
            .then((resp) =>{
                resp.data.forEach((item)=> {
                    store.subscriptionsAllList.push({
                        id:item.id,
                        label: item.name,
                        value: item.name
                    })
                })
            })
            .catch((err)=> {

            })
        if (storeProfile.id !=0) {
            cashbackService.getSellerCashbackList(storeProfile.id)
                .then((resp)=> {
                    store.partnersUserList = resp.data
                })
                .catch((err)=> {

                })
            cashbackService.getCategoryCashbackList(storeProfile.id)
                .then((resp)=> {
                    store.subscriptionsUserList = resp.data
                    store.isFetching = false
                })
                .catch((err)=>{

                })
        }
    })

    return makeAutoObservable(store)
}

export const storeCashBacks = CashBacksList()