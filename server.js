const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const shutdown = () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);