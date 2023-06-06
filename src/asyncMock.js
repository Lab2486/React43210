export const products = [
  {
    id: 1,
    name: "Skeleton Pullover ",
    type: "Hoodie",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/skeleton-pullover-techwear-854_720x.webp?v=1674840684",
    price: 299.99,
    stock: 15,
    description:
      "This techwear jacket is equipped with a multitude of storage pockets to easily carry your personal belongings.",
  },
  {
    id: 2,
    name: "Cyberpunk Sweatshirt",
    type: "Hoodie",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/cyberpunk-sweatshirt-techwear-433_720x.webp?v=1674837960",
    price: 199.99,
    stock: 10,
  },
  {
    id: 3,
    name: "Oversized Hoodie Japanese",
    type: "Hoodie",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/oversized-hoodie-japanese-techwear-607_720x.webp?v=1674841017",
    price: 399.99,
    stock: 3,
  },
  {
    id: 4,
    name: "Techwear Cargo Pants",
    type: "Pants",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/techwear-cargo-pants-techwear-773_720x.webp?v=1674832311",
    price: 149.99,
    stock: 8,
  },
  {
    id: 5,
    name: "Cyberpunk Pants",
    type: "Pants",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/cyberpunk-pants-techwear-960_720x.webp?v=1681216809",
    price: 179.99,
    stock: 6,
  },
  {
    id: 6,
    name: "Japanese Techwear Pants ",
    type: "Pants",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/japanese-techwear-pants-techwear-627_720x.webp?v=1674832107",
    price: 99.99,
    stock: 12,
  },
  {
    id: 7,
    name: "Techwear Jacket (Men)",
    type: "Jacket",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/techwear-jacket-men-techwear-288_720x.webp?v=1674831299",
    price: 249.99,
    stock: 4,
  },
  {
    id: 8,
    name: "Black Techwear Jacket",
    type: "Jacket",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/black-techwear-jacket-techwear-246_720x.webp?v=1674831252",
    price: 79.99,
    stock: 15,
  },
  {
    id: 9,
    name: "White Techwear Jacket ",
    type: "Jacket",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/white-techwear-jacket-techwear-859_720x.webp?v=1674831449",
    price: 199.99,
    stock: 7,
  },
  {
    id: 10,
    name: "Black Techwear Shoes",
    type: "Shoes",
    image:
      "//cdn.shopify.com/s/files/1/0271/9658/8125/products/black-techwear-shoes-techwear-870_720x.webp?v=1677330434",
    price: 129.99,
    stock: 9,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 2000);
  });
};
