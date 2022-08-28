"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
  getNUsersHandler,
  getUserByIdHandler,
  getUserCountHandler,
} = require("./handlers/get");

module.exports = async function (fastify, opts) {
  // GET users with pagination
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
      return await getNUsersHandler(
        request.query["take"],
        request.query["skip"]
      );
    },
  });

  // GET user count
  fastify.route({
    method: "GET",
    url: "/count",
    handler: async (request, reply) => {
      return await getUserCountHandler();
    },
  });

  // GET user by id
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
      return await getUserByIdHandler(request.params.id);
    },
  });
};
