const ProductService = require('../product_service_no_di.js');
const StubProductClient = require('./stub_product_client.js');

describe('productService - stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });


  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items).toEqual([{item: "Milk", available: true}]);
    expect(items.length).toBe(1);
  });
});