class stubProductClient {
  async fetchItems() {
    return [
      {item: "Milk", available: true},
      {item: "banana", available: false}
    ];
  };
};

module.exports = stubProductClient;