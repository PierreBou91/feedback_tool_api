'use strict'
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
    const feedbacks = await prisma.feedback.findMany()
  fastify.get('/', async function (request, reply) {
    return feedbacks
  })
}
