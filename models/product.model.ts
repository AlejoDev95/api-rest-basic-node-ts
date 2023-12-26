type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  isBlock: boolean;
};

interface ProductCreate extends Omit<Product, "id"> {}

interface ProductUpdate extends Partial<Product> {}

export { Product, ProductCreate, ProductUpdate };
