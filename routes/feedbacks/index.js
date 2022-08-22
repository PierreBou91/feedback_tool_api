'use strict'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
  // await fastify.register(cors, {
  //   origin: "*",
  //   methods: ["GET"],
  // });
  fastify.get('/', async function (request, reply) {
    const feedbacks = await prisma.feedback.findMany({
      include: {
        company: true,
      }
    })
    return feedbacks
  })

  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params
    const feedback = await prisma.feedback.findUnique({
      where: {
        id: id
      },
      include: {
        company: true,
        comments: true,
      }
    })
    return feedback
  })
}
