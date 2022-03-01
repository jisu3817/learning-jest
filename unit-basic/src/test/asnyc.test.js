const fetchProduct = require('../async.js');

describe('asnyc', () => {
  it('async - done', (done) => {
    fetchProduct().then(data => {
      expect(data).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  it('async - return', () => {
    return fetchProduct().then(data => {
      expect(data).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();
     expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolves', async () => {
    expect(fetchProduct()).resolves.toEqual({ 
       item: 'Milk', 
       price: 200 
    });
  });

  it('async - reject', async () => {
    expect(fetchProduct('error')).rejects.toEqual('network error');
  });
})