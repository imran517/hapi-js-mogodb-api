const Hapi = require('@hapi/hapi');
const routes = require('./routes')
const config = require('./config');

const init = async () => {

  const server = Hapi.server({
      port: config.api.port,
      host: config.api.host
  });

  routes(server);

  await server.start();
  console.log(`Hapi server running on port ${config.api.port}`)
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
