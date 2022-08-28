"use strict";

const { getCommentsByFeedbackIdHandler } = require("./handlers/get");

module.exports = async function (fastify, opts) {
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      query: {
        type: "object",
        properties: {
          feedbackId: { type: "string" },
        },
        required: ["feedbackId"],
      },
    },
    handler: async (request, reply) => {
      return await getCommentsByFeedbackIdHandler(request.query["feedbackId"]);
    },
  });
};
