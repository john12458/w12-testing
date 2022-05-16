export class Bookstore {
    private _num_book = 0;
    sell(num_book: number){
        this._num_book += num_book;
    }
    get total_price(){
        return this._num_book * 100
    }
}
