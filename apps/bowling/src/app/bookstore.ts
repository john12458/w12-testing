type book_list = {
    [key: string]: number
}
export class Bookstore {
    private _sell_book_list:book_list = {}
    sell(book_title: string,num_book: number){
        if(book_title in this._sell_book_list)
            this._sell_book_list[book_title] += num_book;
        else if(num_book !== 0)
            this._sell_book_list[book_title] = num_book;
    }
    get total_price(){
        let price = 0
        let book_list = Object.values(this._sell_book_list)
        book_list.forEach(book_price =>{
            price += book_price * 100
        })
        if(book_list.length == 2){
            price = price * 0.95
        }
        return price;
    }
}


