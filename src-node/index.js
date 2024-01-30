const app = require('./server');

// Error handling (node)
process.on('uncaughtException', () => {
  // do something here
});
process.on('unhandledRejection', () => {
// do something here
});
const port = 3001;

app.listen(port, () => {
  console.log(`Node server started on http://localhost:${port}`);
});
