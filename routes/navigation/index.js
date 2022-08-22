"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("@fastify/cors");

module.exports = async function (fastify, opts) {
  await fastify.register(cors, {
    origin: "*",
    methods: ["GET"],
  });

  fastify.get("/", async function (request, reply) {
    const nav = await prisma.navigation.findMany();
    return nav
  });
};
