const express = require('express');
const router = express.Router();
const data = require('../data');

// GET /api/products - Get all products
router.get('/products', (req, res) => {
  const products = data.getAllProducts();
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

// GET /api/products/:id - Get single product
router.get('/products/:id', (req, res) => {
  const product = data.getProductById(req.params.id);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }
  
  res.json({
    success: true,
    data: product
  });
});

// POST /api/products - Create new product
router.post('/products', (req, res) => {
  try {
    const newProduct = data.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: newProduct
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// PUT /api/products/:id - Update product
router.put('/products/:id', (req, res) => {
  const updated = data.updateProduct(req.params.id, req.body);
  
  if (!updated) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }
  
  res.json({
    success: true,
    message: 'Product updated successfully',
    data: updated
  });
});

// DELETE /api/products/:id - Delete product
router.delete('/products/:id', (req, res) => {
  const deleted = data.deleteProduct(req.params.id);
  
  if (!deleted) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }
  
  res.json({
    success: true,
    message: 'Product deleted successfully',
    data: deleted
  });
});

module.exports = router;
