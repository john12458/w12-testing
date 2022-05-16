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
  test('第一集買 1 本、第二集買 2 本、第三集買 3 本',()=>{
    bookstore.sell("HarryPotter1",1);
    bookstore.sell("HarryPotter2",2);
    bookstore.sell("HarryPotter3",3);
    expect(bookstore.total_price).toBe(570);  
  })
  test('第一集買 1 本、第二集買 2 本、第三集買 3 本、第四集買 4 本',()=>{
    bookstore.sell("HarryPotter1",1);
    bookstore.sell("HarryPotter2",2);
    bookstore.sell("HarryPotter3",3);
    bookstore.sell("HarryPotter4",4);
    expect(bookstore.total_price).toBe(920);  
  })
  test('第一集買 1 本、第二集買 2 本、第三集買 3 本、第四集買 4 本、第五集買 5 本',()=>{
    bookstore.sell("HarryPotter1",1);
    bookstore.sell("HarryPotter2",2);
    bookstore.sell("HarryPotter3",3);
    bookstore.sell("HarryPotter4",4);
    bookstore.sell("HarryPotter5",5);
    expect(bookstore.total_price).toBe(1375);  
  })
  test('第一集買 1 本、第二集買 2 本、第三集買 3 本、第四集買 4 本、第五集買 5 本、第六集買 6 本',()=>{
    bookstore.sell("HarryPotter1",1);
    bookstore.sell("HarryPotter2",2);
    bookstore.sell("HarryPotter3",3);
    bookstore.sell("HarryPotter4",4);
    bookstore.sell("HarryPotter5",5);
    bookstore.sell("HarryPotter6",6);
    expect(bookstore.total_price).toBe(1975);  
  })

});
