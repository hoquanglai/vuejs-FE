export default class ProductService {
  getProductsSmall() {
    return fetch("../component/products-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getProducts() {
    return fetch("demo/data/products.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getProductsWithOrdersSmall() {
    return fetch("demo/data/products-orders-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
