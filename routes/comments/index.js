'use strict'
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
    const comments = await prisma.comment.findMany()
  fastify.get('/', async function (request, reply) {
    return comments
  })
}
