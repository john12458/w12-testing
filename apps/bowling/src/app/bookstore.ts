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
    _price_discount(price: number,num_book: number): number {
        switch (num_book) {
            case 2:
                price = price * 0.95
                break;
            case 3: 
                price = price * 0.9
                break;
            default:
                break;
        }
        return price
    }
    get total_price(){
        let price = 0
        let book_list = Object.values(this._sell_book_list)
        // 先將每一種書都算第一本
        price = book_list.length * 100
        // 折扣列表
        let discount_price = this._price_discount(price,book_list.length)
        // 再加上超過第一本而因此沒有折扣的書
        let not_discount_price = 0
        book_list.forEach(book_price =>{
            not_discount_price+= (book_price-1) * 100
        })

        return discount_price + not_discount_price;
    }
}


