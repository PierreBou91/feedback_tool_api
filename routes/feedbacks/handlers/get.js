"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getNFeedbacksHandler = async (take, skip) => {
  return await prisma.feedback.findMany({
    take: take,
    skip: skip,
    orderBy: {
      status: "asc",
    },
    include: {
      company: true,
    },
  });
};

const getFeedbackCountHandler = async () => {
  return await prisma.feedback.count();
};

const getFeedbackByIdHandler = async (id) => {
  return await prisma.feedback.findUnique({
    where: {
      id: id,
    },
    include: {
      company: true,
    },
  });
};

module.exports = {
  getNFeedbacksHandler,
  getFeedbackCountHandler,
  getFeedbackByIdHandler,
};
