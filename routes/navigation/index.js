const { getNavigationHandler } = require("./handlers/get");

module.exports = async function (fastify, opts) {
  // @route GET /navigation
  fastify.route({
    method: "GET",
    url: "/",
    handler: async (request, reply) => {
      return await getNavigationHandler(request, reply);
    },
  });
};
