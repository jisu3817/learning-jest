const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client');

describe('productService', () => {
  const fetchItems = jest.fn(async () => [
    {item: "Milk", available: true},
    {item: "banana", available: false},
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    /* jest.config.js에서 mock함수 초기화 기능인 clearMocks를 false로 지정한 경우 
    수동으로 mockClear()를 해줘야 한다. 
    fetchItems.mockClear();
    ProductClient.mockClear();
    */
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items).toEqual([{item: "Milk", available: true}]);
    expect(items.length).toBe(1);
  });
});