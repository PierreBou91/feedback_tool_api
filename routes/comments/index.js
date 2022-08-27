"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
  // Querystring validation for comments route
  const schema = {
    query: {
      type: "object",
      properties: {
        feedbackId: { type: "string" },
      },
      required: ["feedbackId"],
    },
  };

  fastify.get("/", async function (request, reply) {
    const comments = await prisma.comment.findMany({
      where: {
        feedbackId: request.query["feedbackId"],
      },
      include: {
        author: true,
      },
    });
    return comments;
  });
};
