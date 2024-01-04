import { faker } from "@faker-js/faker";
import boom from "@hapi/boom";
import { Product, ProductCreate, ProductUpdate } from "../models";
import { sequelize } from "../libs";

class ProductService {
  public listOfProducts: Product[] = [];

  constructor() {
    this.listOfProducts = this.generateData();
  }

  generateData = (): Product[] => {
    const products: Product[] = [];
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
    return products;
  };

  getProducts = async () => {
    const query = "SELECT * FROM tasks";
    const [data] = await sequelize.query(query);
    return { data };
  };

  getSingleProduct = async (id: Product["id"]) => {
    const productSelected = this.listOfProducts.find(
      (product) => product.id === id,
    );

    if (!productSelected) {
      throw boom.notFound("Product not found");
    }

    if (productSelected.isBlock) {
      throw boom.conflict("Product is blocked");
    }

    return productSelected;
  };

  createProduct = async (body: ProductCreate) => {
    const newProduct: Product = { id: faker.string.uuid(), ...body };
    this.listOfProducts.push(newProduct);
    return newProduct;
  };

  updateProduct = async (id: Product["id"], body: ProductUpdate) => {
    const indexSelectedProduct = this.listOfProducts.findIndex(
      (product) => product.id === id,
    );

    if (indexSelectedProduct === -1) {
      throw boom.notFound("Product not found");
    }

    const productSelected = this.listOfProducts[indexSelectedProduct];
    this.listOfProducts[indexSelectedProduct] = { ...productSelected, ...body };
    return this.listOfProducts[indexSelectedProduct];
  };

  deleteProduct = async (id: Product["id"]) => {
    const indexSelectedProduct = this.listOfProducts.findIndex(
      (product) => product.id === id,
    );

    if (indexSelectedProduct === -1) {
      throw boom.notFound("Product not found");
    }

    return this.listOfProducts.splice(indexSelectedProduct, 1)[0];
  };
}

export { ProductService };
