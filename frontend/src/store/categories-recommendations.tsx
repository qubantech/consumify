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
    total: "a",
    cashback: 3,
    partner: true,
    price: 1000,
}, {
    name: 'name',
    id: 1,
    total:  "a",
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 2,
    total:  "a",
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 3,
    total:  "a",
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 4,
    total:  "a",
    cashback: 3,
    partner: true,
    price: 1000,
},{
    name: 'name',
    id: 5,
    total:  "a",
    cashback: 3,
    partner: true,
    price: 1000,
}];

const inPage = 4;

const categoriesRecommendations = () => {
    const store = {
        isFetching: false,
        cards: cardsInitState,
        currentCards: cardsInitState.slice(0, inPage),
        total: 2,
        currentPage: 1,
        filterValue: 'supermarkets',
        filterOptions: [
            { label: 'Супермаркеты', value: 'supermarkets' },
            { label: 'Автозаправки', value: 'gas' },
            { label: 'Одежда', value: 'clothes' },
            { label: 'Мебель и бытовая техника', value: 'furniture and household appliances' },
            { label: 'Фастфуд', value: 'fast food' },
            { label: 'Игры', value: 'games' },
            { label: 'Апетеки', value: 'pharmacies' },
            { label: 'Зоомагазины', value: 'pet shops' },
            { label: 'Автосервисы', value: 'automobile services' },
        ],
        setCurrentPage (page: number) {
            store.currentCards = store.cards.slice(inPage * (page - 1), inPage * page)
            store.currentPage = page
        },
        setFilterValue (value:string) {
            store.filterValue = value
        },
        reset: () => {
            store.isFetching = false
            store.cards = cardsInitState
            store.currentCards = cardsInitState.slice(0, inPage)
            store.total = 2
            store.currentPage = 1
            store.filterValue = 'supermarkets'
            store.filterOptions = [
                { label: 'Супермаркеты', value: 'supermarkets' },
                { label: 'Автозаправки', value: 'gas' },
                { label: 'Одежда', value: 'clothes' },
                { label: 'Мебель и бытовая техника', value: 'furniture and household appliances' },
                { label: 'Фастфуд', value: 'fast food' },
                { label: 'Игры', value: 'games' },
                { label: 'Апетеки', value: 'pharmacies' },
                { label: 'Зоомагазины', value: 'pet shops' },
                { label: 'Автосервисы', value: 'automobile services' },
            ]
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