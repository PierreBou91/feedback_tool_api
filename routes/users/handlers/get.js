"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getNUsersHandler = async (take, skip) => {
  return await prisma.user.findMany({
    take: take,
    skip: skip,
    orderBy: {
      name: "asc",
    },
  });
};

// User count
const getUserCountHandler = async () => {
  return await prisma.user.count();
};

// User by id
const getUserByIdHandler = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getNUsersHandler,
  getUserByIdHandler,
  getUserCountHandler,
};
