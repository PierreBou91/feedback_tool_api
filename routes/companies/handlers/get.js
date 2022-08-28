"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getNCompaniesHandler = async (take, skip) => {
  return await prisma.company.findMany({
    take: take,
    skip: skip,
    orderBy: {
      name: "asc",
    },
  });
};

const getCompanyCountHandler = async () => {
  return await prisma.company.count();
};

const getCompanyByIdHandler = async (id) => {
  return await prisma.company.findUnique({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getNCompaniesHandler,
  getCompanyCountHandler,
  getCompanyByIdHandler,
};
