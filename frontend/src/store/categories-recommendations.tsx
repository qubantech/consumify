import { makeAutoObservable, runInAction } from "mobx";
import '../http/models/card-interface';
import { CardInterface } from "../http/models";

async function getCards (param: string) {
    let cardsList: CardInterface[] = [];

    return cardsList
}

const cardsInitState:CardInterface[] = [];

const inPage = 6;

const categoriesRecommendations = () => {
    const store = {
        isFetching: false,
        cards: cardsInitState,
        currCards: cardsInitState,
        total: 0,
        currentPage: 1,
        setCurrentPage (page: number) {
            store.currCards = store.cards.slice(inPage * (page - 1), inPage * page)
            store.currentPage = page
        },
        filterValue: 'American',
        filterOptions: [
            { label: 'American', value: 'american' },
            { label: 'British', value: 'british' },
            { label: 'Soviet Russian', value: 'russian' },
            { label: 'China', value: 'chinese' },
        ],
        // changeFilter (value: string) {
        //     store.currentPage = 1;
        //     store.isFetching = true;
        //     getCards(`filter.php?a=${value}`)
        //         .then((cards) => {
        //             store.cards = cards;
        //             let totalPage = Math.floor(store.cards.length/inPage);
        //             store.total = totalPage;
        //             store.currCards = cards.slice(0, inPage);
        //             store.isFetching = false;
        //             store.filterValue = value;
        //             }
        //         )
        //         .catch((err) => console.log(err))
        //     console.log(store.cards)
        // }
    }

    runInAction(() => {
        // store.changeFilter(store.filterValue)
    })

    return makeAutoObservable(store)

}

export const storeCategoriesRecommendations = categoriesRecommendations()