export const fetchData = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Brand A",
    price: 99.99,
    rating: 4.5,
    imageUrl:
      "https://www.gonoise.com/cdn/shop/files/1_2807dbd9-3951-481c-9e9a-61af0420cd37.webp?v=1720759165",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    category: "Electronics",
    brand: "Brand B",
    price: 49.99,
    rating: 4.0,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Footwear",
    brand: "Brand C",
    price: 59.99,
    rating: 4.2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR_VvLy3HYbsqzU7IKn8M5CQhguNszaK1pQ&s",
  },
  {
    id: 4,
    name: "Smartphone",
    category: "Electronics",
    brand: "Brand D",
    price: 499.99,
    rating: 4.8,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-8vKfQuFwEoOQ9iIEnJbnkhro2q9nPrssw&s",
  },
  {
    id: 5,
    name: "Leather Jacket",
    category: "Clothing",
    brand: "Brand E",
    price: 199.99,
    rating: 4.7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSJCYqyMx1xabjpRt8cjyxnoSUrgWcxXfdg&s",
  },
  {
    id: 6,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Brand A",
    price: 99.99,
    rating: 4.5,
    imageUrl:
      "https://www.gonoise.com/cdn/shop/files/1_2807dbd9-3951-481c-9e9a-61af0420cd37.webp?v=1720759165",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Electronics",
    brand: "Brand B",
    price: 49.99,
    rating: 4.0,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s",
  },
  {
    id: 8,
    name: "Running Shoes",
    category: "Footwear",
    brand: "Brand C",
    price: 59.99,
    rating: 4.2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR_VvLy3HYbsqzU7IKn8M5CQhguNszaK1pQ&s",
  },
  {
    id: 9,
    name: "Smartphone",
    category: "Electronics",
    brand: "Brand D",
    price: 499.99,
    rating: 4.8,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-8vKfQuFwEoOQ9iIEnJbnkhro2q9nPrssw&s",
  },
  {
    id: 10,
    name: "Leather Jacket",
    category: "Clothing",
    brand: "Brand E",
    price: 199.99,
    rating: 4.7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSJCYqyMx1xabjpRt8cjyxnoSUrgWcxXfdg&s",
  },
  {
    id: 11,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Brand A",
    price: 99.99,
    rating: 4.5,
    imageUrl:
      "https://www.gonoise.com/cdn/shop/files/1_2807dbd9-3951-481c-9e9a-61af0420cd37.webp?v=1720759165",
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    category: "Electronics",
    brand: "Brand B",
    price: 49.99,
    rating: 4.0,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s",
  },
  {
    id: 13,
    name: "Running Shoes",
    category: "Footwear",
    brand: "Brand C",
    price: 59.99,
    rating: 4.2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR_VvLy3HYbsqzU7IKn8M5CQhguNszaK1pQ&s",
  },
  {
    id: 14,
    name: "Smartphone",
    category: "Electronics",
    brand: "Brand D",
    price: 499.99,
    rating: 4.8,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-8vKfQuFwEoOQ9iIEnJbnkhro2q9nPrssw&s",
  },
  {
    id: 15,
    name: "Leather Jacket",
    category: "Clothing",
    brand: "Brand E",
    price: 199.99,
    rating: 4.7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSJCYqyMx1xabjpRt8cjyxnoSUrgWcxXfdg&s",
  },
];

export const filterByCategories = (products) => {
  const categories = new Set();

  return products.filter(({ category }) => {
    if (categories.has(category)) {
      return false;
    }
    categories.add(category);
    return true;
  }, {});
};

export const PAGE_SIZE = 10;
export const itemsByPage = (products, page = 1) => {
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  return products.slice(start, end);
};

export const generatePage = (products) => {
  const pages = Math.ceil(products.length / PAGE_SIZE);
  return Array(pages)
    .fill({})
    .map((val, i) => {
      return {
        page: i + 1,
        id: i,
      };
    });
};
