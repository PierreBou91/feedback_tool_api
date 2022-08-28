"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get all navigation items handler
const getNavigationHandler = async (request, reply) => {
  return await prisma.navigation.findMany();
};

module.exports = { getNavigationHandler };
