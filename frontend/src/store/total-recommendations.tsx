import { makeAutoObservable, runInAction } from "mobx";
import '../components/@types/card-interface';
import { CardInterface } from "../components/@types";

async function getCards (param: string) {
    let cardsList: CardInterface[] = [];

    return cardsList
}

const cardsInitState:CardInterface[] = [{
    name: 'name',
    id: 0,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
}, {
    name: 'name',
    id: 1,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 2,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 3,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 4,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 5,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
},
    {
    name: 'name',
    id: 6,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
},
    {
    name: 'name',
    id: 7,
    total: 10,
    cashback: 3,
    partner: true,
    price: 1000,
}, {
        name: 'name',
        id: 8,
        total: 10,
        cashback: 3,
        partner: false,
        price: 1000,
    }];

const inPage = 4;

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
        reset: () => {
            store.isFetching = false
            store.cards = cardsInitState
            store.currentCards = cardsInitState.slice(0, inPage)
            store.total = 2
            store.currentPage = 1
        }
    }

    runInAction(() => {
    })

    return makeAutoObservable(store)
}

export const storeTotalRecommendations = totalRecommendations()