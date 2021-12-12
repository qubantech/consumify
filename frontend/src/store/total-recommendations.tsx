import { makeAutoObservable, runInAction } from "mobx";
import '../components/@types/card-interface';
import { CardInterface } from "../components/@types";
import {recommendService} from "../http/api-services/recommend-service";
import {Sellers} from "../http/models/recommend-models/sellers";
import {storeProfile} from "./profile";

async function getCards () {
    let cardsList:CardInterface[] = []
    let info1 = await recommendService.getRecommend(storeProfile.id)
    let inf = info1.data
    info1.data.forEach((item)=> {
        cardsList.push({
            name: item.product.name,
            id: item.product.id,
            price: item.offers[0].price,
            cashback: item.offers[0].cashbackValue,
            total:item.offers[0].seller.name,
            partner: true
        })

    })
    return cardsList
}
const cardsInitState:CardInterface[] = []

const inPage = 8;
const totalOffers = 16;

const totalRecommendations = () => {
    const store = {
        isFetching: false,
        cards: cardsInitState,
        currentCards: cardsInitState.slice(0, inPage),
        total: 2,
        currentPage: 1,
        setCurrentPage (page: number) {
            store.currentCards = store.cards.slice(inPage * (page - 1), inPage * page)
            store.currentPage = page
        },
    }

    runInAction(() => {
        getCards()
            .then((resp)=> {
                store.cards = resp
                store.currentCards = store.cards.slice(0,8)
            })

    })

    return makeAutoObservable(store)
}

export const storeTotalRecommendations = totalRecommendations()