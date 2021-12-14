import { makeAutoObservable, runInAction } from "mobx";
import '../components/@types/card-interface';
import { CardInterface } from "../components/@types";
import {recommendService} from "../http/api-services/recommend-service";
import {Sellers} from "../http/models/recommend-models/sellers";
import {storeProfile} from "./profile";
import {OfferModel} from "../http/models/offer-models/offer-model";
import {CategoryModel} from "../http/models";
import {ProductsList} from "../http/models/recommend-models/products-list";

async function getCards () {
    let cardsList:CardInterface[] = []
    //let idPrice:{price:number, cashback:number}[] = []
    let info1 = await recommendService.getRecommend(storeProfile.id)
    storeTotalRecommendations.productsList = info1.data
    //let inf = info1.data
    /*for (let i=0; i<16;i++){
        let info2 = await recommendService.getAuthRecommend(storeProfile.id, info1.data[i].product.id)
        //console.log(info2.data.seller)
        idPrice.push({price:info2.data.price, cashback: info2.data.cashbackValue} )
    }
    console.log(idPrice)*/
    let i = 0
    info1.data.forEach((item)=> {
                cardsList.push({
                    name: item.product.name,
                    id: item.product.id,
                    price: item.offers[0].price,
                    cashback: item.offers[0].cashbackValue,
                    total: item.offers[0].seller.name,
                    partner: true
                })
            })
    return cardsList
}
const cardsInitState:CardInterface[] = []
const offerInitState:OfferModel[]= []

const inPage = 8;
const totalOffers = 16;

const PrInit:ProductsList[] = []

const totalRecommendations = () => {
    const store = {
        isFetching: false,
        currOffers: offerInitState,
        cards: cardsInitState,
        productsList: PrInit,
        currentCards: cardsInitState.slice(0, inPage),
        open: false,
        total: 2,
        currentPage: 1,
        onClickOffers(id:number){
            let index = store.productsList.findIndex(item=>item.product.id == id)
            store.currOffers = store.productsList[index].offers
            store.open = true
            //store.currOffers = store.cards[]
        },
        onClose(){
            store.currOffers = offerInitState
            store.open = false
        },
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
        getCards()
            .then((resp)=> {
                store.cards = resp
                store.currentCards = store.cards.slice(0,8)
            })

    })

    return makeAutoObservable(store)
}

export const storeTotalRecommendations = totalRecommendations()