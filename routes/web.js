const express = require('express');
const router = express.Router();
const data = require('../data');

// Home page
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home - Express CRUD App'
  });
});

// List all products
router.get('/products', (req, res) => {
  const products = data.getAllProducts();
  res.render('products/list', {
    title: 'Products List',
    products: products
  });
});

// Create product form
router.get('/products/new', (req, res) => {
  res.render('products/form', {
    title: 'Create New Product',
    product: null,
    action: '/products/create'
  });
});

// Handle create product
router.post('/products/create', (req, res) => {
  data.createProduct(req.body);
  res.redirect('/products');
});

// Edit product form
router.get('/products/edit/:id', (req, res) => {
  const product = data.getProductById(req.params.id);
  
  if (!product) {
    return res.status(404).render('error', {
      title: 'Error',
      error: 'Product not found'
    });
  }
  
  res.render('products/form', {
    title: 'Edit Product',
    product: product,
    action: `/products/update/${product.id}`
  });
});

// Handle update product
router.post('/products/update/:id', (req, res) => {
  data.updateProduct(req.params.id, req.body);
  res.redirect('/products');
});

// Handle delete product
router.post('/products/delete/:id', (req, res) => {
  data.deleteProduct(req.params.id);
  res.redirect('/products');
});

// View single product
router.get('/products/:id', (req, res) => {
  const product = data.getProductById(req.params.id);
  
  if (!product) {
    return res.status(404).render('error', {
      title: 'Error',
      error: 'Product not found'
    });
  }
  
  res.render('products/view', {
    title: `Product - ${product.name}`,
    product: product
  });
});

module.exports = router;
