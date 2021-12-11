import { makeAutoObservable, runInAction } from "mobx";
import '../http/models/card-interface';
import { CardInterface } from "../http/models";

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
}];

const inPage = 6;

const categoriesRecommendations = () => {
    const store = {
        isFetching: false,
        cards: cardsInitState,
        currCards: cardsInitState.slice(0, inPage),
        total: 2,
        currentPage: 1,
        setCurrentPage (page: number) {
            store.currCards = store.cards.slice(inPage * (page - 1), inPage * page)
            store.currentPage = page
        },
        filterValue: 'American',
        filterOptions: [
            { label: 'Супермаркеты', value: 'american' },
            { label: 'Автозаправки', value: 'british' },
            { label: 'Одежда', value: 'russian' },
            { label: 'Мебель и бытовая техника', value: 'q6' },
            { label: 'Фастфуд', value: 'q' },
            { label: 'Игры', value: 'q2' },
            { label: 'Апетеки', value: 'q3' },
            { label: 'Зоомагазины', value: 'q4' },
            { label: 'Автосервисы', value: 'q5' },
        ],
        setFilterValue (value:string) {
            store.filterValue = value
        }
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