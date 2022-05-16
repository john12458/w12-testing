import { Bookstore } from './bookstore';

describe('Bookstore', () => {
  let bookstore: Bookstore;
  beforeEach(() =>{
    bookstore = new Bookstore();
  })

  it('should create an instance', () => {
    expect(bookstore).toBeTruthy();
  });

  test('all zero',()=>{
      bookstore.sell("HarryPotter1",0);
      expect(bookstore.total_price).toBe(0);  
  })
  test('sell one',()=>{
    bookstore.sell("HarryPotter1",1);
    expect(bookstore.total_price).toBe(100);  
  })


});
