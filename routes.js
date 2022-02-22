const controller = require('./controller')

const routes = function (server){
    let app = server;
    app.route({
        method: 'GET',
        path: '/gettasks',
        handler: async (req, h) => {
            try {
                let result = await controller.getTasks(req, h);
                return result;
            } catch (error) {
                return error;
            }
          }
      });

      app.route({
        method: 'GET',
        path: '/gettask/{id}',
        handler: async (req, h) => {
            try {
                let result = await controller.getTask(req, h);
                return result;
            } catch (error) {
                return error;
            }
          }
      });

      app.route({
        method: 'POST',
        path: '/addtask',
        handler: async (req, h) => {
            try {
                let result = await controller.addTask(req, h);
                return result;
            } catch (error) {
                return error;
            }
          }
      });

      app.route({
        method: 'POST',
        path: '/updatetask',
        handler: async (req, h) => {
            try {
                let result = await controller.updateTask(req, h);
                return result;
            } catch (error) {
                return error;
            }
          }
      });

      app.route({
        method: 'POST',
        path: '/deletetask',
        handler: async (req, h) => {
            try {
                let result = await controller.deleteTask(req, h);
                return result;
            } catch (error) {
                return error;
            }
          }
      });
}

module.exports = routes;