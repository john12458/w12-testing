type book_list = {
    [key: string]: number
}
export class Bookstore {
// class Bookstore {
    private _sell_book_list:book_list = {}
    sell(book_title: string,num_book: number){
        if(book_title in this._sell_book_list)
            this._sell_book_list[book_title] += num_book;
        else
            this._sell_book_list[book_title] = num_book;
    }
    get total_price(){
        let price = 0
        console.log(this._sell_book_list)
        Object.values(this._sell_book_list).forEach(book_price =>{
            price += book_price * 100
        })
        console.log(price)
        return price;
    }
}
