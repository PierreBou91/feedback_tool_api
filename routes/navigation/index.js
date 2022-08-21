"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("@fastify/cors");

module.exports = async function (fastify, opts) {
  await fastify.register(cors, {
    origin: "*",
    methods: ["GET"],
  });
  const nav = await prisma.navigation.findMany();
  fastify.get("/", async function (request, reply) {
    return nav;
  });
};
