'use strict'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
  // await fastify.register(cors, {
  //   origin: "*",
  //   methods: ["GET"],
  // });
  fastify.get('/', async function (request, reply) {
    const feedbacks = await prisma.feedback.findMany()
    return feedbacks
  })
}
