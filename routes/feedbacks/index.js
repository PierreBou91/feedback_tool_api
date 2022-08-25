"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
  fastify.get("/", async (request, reply) => {
    const feedbacks = await prisma.feedback.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        company: true,
      },
    });
    return feedbacks;
  });

  // fastify.get("/", async function (request, reply) {
  //   const feedbacks = await prisma.feedback.findMany({
  //     include: {
  //       company: true,
  //     },
  //   });
  //   return feedbacks;
  // });

  fastify.get("/:id", async function (request, reply) {
    const { id } = request.params;
    const feedback = await prisma.feedback.findUnique({
      where: {
        id: id,
      },
      include: {
        company: true,
      },
    });
    return feedback;
  });
};
