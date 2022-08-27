"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
  // Querystring validation for feedback route
  const schema = {
    query: {
      type: "object",
      properties: {
        take: { type: "number" },
        skip: { type: "number" },
      },
      required: ["take", "skip"],
    },
  };

  fastify.get("/", { schema }, async (request, reply) => {
    const feedbacks = await prisma.feedback.findMany({
      take: request.query["take"],
      skip: request.query["skip"],
      orderBy: {
        status: "asc",
      },
      include: {
        company: true,
      },
    });
    return feedbacks;
  });

  fastify.get("/count", async (request, reply) => {
    const count = await prisma.feedback.count();
    return count;
  });

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
