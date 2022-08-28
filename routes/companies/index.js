"use strict";

const {
  getNCompaniesHandler,
  getCompanyCountHandler,
  getCompanyByIdHandler,
} = require("./handlers/get");

module.exports = async function (fastify, opts) {
  // GET companies with pagination
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
      return await getNCompaniesHandler(
        request.query["take"],
        request.query["skip"]
      );
    },
  });

  // GET count of companies
  fastify.route({
    method: "GET",
    url: "/count",
    handler: async (request, reply) => {
      return await getCompanyCountHandler();
    },
  });

  // GET company by id
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
      return await getCompanyByIdHandler(request.params.id);
    },
  });
};
