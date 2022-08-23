"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    if (request.query["feedbackId"]) {
      console.log("been here");
      console.log(request.query["feedbackId"]);
      const comments = await prisma.comment.findMany({
        where: {
          feedbackId: request.query["feedbackId"],
        },
        include: {
          author: true,
        },
      });
      return comments;
    }

    const comments = await prisma.comment.findMany();
    return comments;
  });
};
