"use strict";

const {
  getNFeedbacksHandler,
  getFeedbackCountHandler,
  getFeedbackByIdHandler,
} = require("./handlers/get");

module.exports = async function (fastify, opts) {
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      query: {
        type: "object",
        properties: {
          take: { type: "number" },
          skip: { type: "number" },
        },
        required: ["take", "skip"],
      },
    },
    handler: async (request, reply) => {
      return await getNFeedbacksHandler(
        request.query["take"],
        request.query["skip"]
      );
    },
  });

  fastify.route({
    method: "GET",
    url: "/count",
    handler: async (request, reply) => {
      return await getFeedbackCountHandler();
    },
  });

  fastify.route({
    method: "GET",
    url: "/:id",
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
    },
    handler: async (request, reply) => {
      return await getFeedbackByIdHandler(request.params.id);
    },
  });
};
