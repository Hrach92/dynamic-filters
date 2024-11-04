export const fetchData = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "category": "Electronics",
        "brand": "Brand A",
        "price": 99.99,
        "rating": 4.5,
        "imageUrl": "https://example.com/images/headphones.jpg"
    },
    {
        "id": 2,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "brand": "Brand B",
        "price": 49.99,
        "rating": 4.0,
        "imageUrl": "https://example.com/images/speaker.jpg"
    },
    {
        "id": 3,
        "name": "Running Shoes",
        "category": "Footwear",
        "brand": "Brand C",
        "price": 59.99,
        "rating": 4.2,
        "imageUrl": "https://example.com/images/shoes.jpg"
    },
    {
        "id": 4,
        "name": "Smartphone",
        "category": "Electronics",
        "brand": "Brand D",
        "price": 499.99,
        "rating": 4.8,
        "imageUrl": "https://example.com/images/smartphone.jpg"
    },
    {
        "id": 5,
        "name": "Leather Jacket",
        "category": "Clothing",
        "brand": "Brand E",
        "price": 199.99,
        "rating": 4.7,
        "imageUrl": "https://example.com/images/jacket.jpg"
    },
    {
        "id": 6,
        "name": "Wireless Headphones",
        "category": "Electronics",
        "brand": "Brand A",
        "price": 99.99,
        "rating": 4.5,
        "imageUrl": "https://example.com/images/headphones.jpg"
    },
    {
        "id": 7,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "brand": "Brand B",
        "price": 49.99,
        "rating": 4.0,
        "imageUrl": "https://example.com/images/speaker.jpg"
    },
    {
        "id": 8,
        "name": "Running Shoes",
        "category": "Footwear",
        "brand": "Brand C",
        "price": 59.99,
        "rating": 4.2,
        "imageUrl": "https://example.com/images/shoes.jpg"
    },
    {
        "id": 9,
        "name": "Smartphone",
        "category": "Electronics",
        "brand": "Brand D",
        "price": 499.99,
        "rating": 4.8,
        "imageUrl": "https://example.com/images/smartphone.jpg"
    },
    {
        "id": 10,
        "name": "Leather Jacket",
        "category": "Clothing",
        "brand": "Brand E",
        "price": 199.99,
        "rating": 4.7,
        "imageUrl": "https://example.com/images/jacket.jpg"
    },
    {
        "id": 11,
        "name": "Wireless Headphones",
        "category": "Electronics",
        "brand": "Brand A",
        "price": 99.99,
        "rating": 4.5,
        "imageUrl": "https://example.com/images/headphones.jpg"
    },
    {
        "id": 12,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "brand": "Brand B",
        "price": 49.99,
        "rating": 4.0,
        "imageUrl": "https://example.com/images/speaker.jpg"
    },
    {
        "id": 13,
        "name": "Running Shoes",
        "category": "Footwear",
        "brand": "Brand C",
        "price": 59.99,
        "rating": 4.2,
        "imageUrl": "https://example.com/images/shoes.jpg"
    },
    {
        "id": 14,
        "name": "Smartphone",
        "category": "Electronics",
        "brand": "Brand D",
        "price": 499.99,
        "rating": 4.8,
        "imageUrl": "https://example.com/images/smartphone.jpg"
    },
    {
        "id": 15,
        "name": "Leather Jacket",
        "category": "Clothing",
        "brand": "Brand E",
        "price": 199.99,
        "rating": 4.7,
        "imageUrl": "https://example.com/images/jacket.jpg"
    }
]

export const filterByCategories = (products) => {
    const categories = new Set();

    return products.filter(({ category }) => {
        if (categories.has(category)) {
            return false;
        }
        categories.add(category);
        return true;
    }, {})
}