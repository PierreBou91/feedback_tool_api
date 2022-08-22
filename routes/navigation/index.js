"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {

  fastify.get("/", async function (request, reply) {
    const nav = await prisma.navigation.findMany();
<<<<<<< Updated upstream
    return nav
=======
    reply.send(nav);
    return;
>>>>>>> Stashed changes
  });
};
