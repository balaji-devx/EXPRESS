// Logging middleware
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

// Request timer middleware
const requestTimer = (req, res, next) => {
  req.startTime = Date.now();
  
  // Log time on response finish
  res.on('finish', () => {
    const duration = Date.now() - req.startTime;
    console.log(`Request to ${req.url} took ${duration}ms`);
  });
  
  next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  console.error(err.stack);
  
  res.status(err.status || 500);
  
  // Check if request accepts JSON
  if (req.accepts('json') && !req.accepts('html')) {
    res.json({
      error: {
        message: err.message,
        status: err.status || 500
      }
    });
  } else {
    res.render('error', {
      title: 'Error',
      error: err.message
    });
  }
};

// 404 handler middleware
const notFoundHandler = (req, res, next) => {
  const error = new Error('Page Not Found');
  error.status = 404;
  next(error);
};

module.exports = {
  logger,
  requestTimer,
  errorHandler,
  notFoundHandler
};
