# Express CRUD Application

A simple Node.js web application built with Express.js to demonstrate routing, RESTful API, CRUD operations, custom middleware, and server-side rendering with EJS templates - all using in-memory mockup data without database integration.

![Home Page](https://github.com/user-attachments/assets/7201be7f-fe46-45e6-91b4-145a36eb9b35)

## Features

- ✨ **Express Framework**: Fast, minimalist web framework for Node.js
- 📋 **Full CRUD Operations**: Create, Read, Update, and Delete products
- 🎨 **EJS Templating**: Server-side rendering with Embedded JavaScript
- 🔌 **RESTful API**: Complete REST API endpoints with JSON responses
- ⚙️ **Custom Middleware**: 
  - Request logging with timestamps
  - Request timing/performance monitoring
  - Error handling
  - 404 Not Found handler
- 💾 **Mockup Data**: In-memory data storage (no database required)
- 🎯 **Routing**: Organized route structure for web pages and API endpoints
- 📱 **Responsive Design**: Mobile-friendly UI with modern CSS

## Screenshots

### Products List
![Products List](https://github.com/user-attachments/assets/d7893192-3c12-419f-a0e4-5389215aa7b8)

### Create/Edit Product Form
![Create Product](https://github.com/user-attachments/assets/1b4b745a-a84b-45a4-b350-76c23215f1f3)

### Product Details
![Product Details](https://github.com/user-attachments/assets/5675f63d-fcb3-4455-91aa-36d68bd68c75)

### API Endpoint
![API Endpoint](https://github.com/user-attachments/assets/9ef30850-dd4b-4550-bf0e-fc58e10fd0d6)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ikavvii/express-crud.git
cd express-crud
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
express-crud/
├── server.js           # Main application entry point
├── data.js             # In-memory data store and CRUD functions
├── middleware.js       # Custom middleware functions
├── routes/
│   ├── web.js          # Web page routes (HTML views)
│   └── api.js          # RESTful API routes (JSON)
├── views/
│   ├── home.ejs        # Home page template
│   ├── error.ejs       # Error page template
│   ├── partials/
│   │   ├── header.ejs  # Header partial (navigation)
│   │   └── footer.ejs  # Footer partial
│   └── products/
│       ├── list.ejs    # Product list view
│       ├── form.ejs    # Create/Edit product form
│       └── view.ejs    # Single product detail view
├── public/
│   └── css/
│       └── style.css   # Application styles
└── package.json        # Project dependencies
```

## API Endpoints

All API endpoints return JSON responses.

### Get All Products
```http
GET /api/products
```
**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### Get Single Product
```http
GET /api/products/:id
```
**Response:**
```json
{
  "success": true,
  "data": { "id": 1, "name": "Laptop", ... }
}
```

### Create Product
```http
POST /api/products
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "inStock": true
}
```
**Response:**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": { ... }
}
```

### Update Product
```http
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "description": "Updated description",
  "price": 149.99,
  "category": "Electronics",
  "inStock": false
}
```
**Response:**
```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": { ... }
}
```

### Delete Product
```http
DELETE /api/products/:id
```
**Response:**
```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": { ... }
}
```

## Web Routes

- `/` - Home page with feature overview
- `/products` - List all products
- `/products/new` - Create new product form
- `/products/:id` - View single product details
- `/products/edit/:id` - Edit product form
- `POST /products/create` - Handle create product
- `POST /products/update/:id` - Handle update product
- `POST /products/delete/:id` - Handle delete product

## Middleware

### Logger Middleware
Logs all incoming requests with timestamp and HTTP method:
```
[2025-11-02T06:52:14.950Z] GET /api/products
```

### Request Timer Middleware
Tracks and logs request processing time:
```
Request to /products took 5ms
```

### Error Handler Middleware
Catches and handles errors, returns appropriate responses (HTML or JSON based on request).

### 404 Handler Middleware
Handles requests to non-existent routes.

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **EJS**: Embedded JavaScript templating
- **CSS3**: Modern styling

## Development

The application uses in-memory data storage, so all changes are lost when the server restarts. This is intentional for demonstration and learning purposes.

To modify the initial data, edit the `data.js` file.

## Environment Variables

- `PORT`: Server port (default: 3000)

Example:
```bash
PORT=3001 npm start
```

## License

ISC

## Author

Express CRUD App - A demonstration project for learning Express.js fundamentals.
