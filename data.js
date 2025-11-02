// Mockup data for products
let products = [
  {
    id: 1,
    name: 'Laptop',
    description: 'High-performance laptop for development',
    price: 1299.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse',
    price: 29.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: 3,
    name: 'Desk Chair',
    description: 'Comfortable office chair',
    price: 199.99,
    category: 'Furniture',
    inStock: false
  },
  {
    id: 4,
    name: 'Monitor',
    description: '27-inch 4K monitor',
    price: 449.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: 5,
    name: 'Keyboard',
    description: 'Mechanical keyboard with RGB lighting',
    price: 89.99,
    category: 'Electronics',
    inStock: true
  }
];

// Counter for generating new IDs
let nextId = 6;

module.exports = {
  products,
  nextId,
  
  // Get all products
  getAllProducts: () => products,
  
  // Get product by ID
  getProductById: (id) => products.find(p => p.id === parseInt(id)),
  
  // Create new product
  createProduct: (productData) => {
    const newProduct = {
      id: nextId++,
      name: productData.name,
      description: productData.description,
      price: parseFloat(productData.price),
      category: productData.category,
      inStock: productData.inStock === 'true' || productData.inStock === true
    };
    products.push(newProduct);
    return newProduct;
  },
  
  // Update product
  updateProduct: (id, productData) => {
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      products[index] = {
        ...products[index],
        name: productData.name,
        description: productData.description,
        price: parseFloat(productData.price),
        category: productData.category,
        inStock: productData.inStock === 'true' || productData.inStock === true
      };
      return products[index];
    }
    return null;
  },
  
  // Delete product
  deleteProduct: (id) => {
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      const deleted = products.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
};
