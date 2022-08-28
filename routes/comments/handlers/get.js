"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCommentsByFeedbackIdHandler = async (feedbackId) => {
  return await prisma.comment.findMany({
    where: {
      feedbackId: feedbackId,
    },
    include: {
      author: true,
    },
  });
};

module.exports = { getCommentsByFeedbackIdHandler };
