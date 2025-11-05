const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
        throw new Error("Test error");
    res.send("Hello World!");
});

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
app.use(errorHandler);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});