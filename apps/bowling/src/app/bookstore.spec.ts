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
  test('第一集買 1 本',()=>{
    bookstore.sell("HarryPotter1",1);
    expect(bookstore.total_price).toBe(100);  
  })
  test('第一集買 1 本、第二集買 1 本',()=>{
    bookstore.sell("HarryPotter1",1);
    bookstore.sell("HarryPotter2",1);
    expect(bookstore.total_price).toBe(190);  
  })
  test('第一集買 1 本、第二集買 2 本',()=>{
    bookstore.sell("HarryPotter1",1);
    bookstore.sell("HarryPotter2",2);
    expect(bookstore.total_price).toBe(290);  
  })

});
