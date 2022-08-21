'use strict'
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
    const users = await prisma.user.findMany()
  fastify.get('/', async function (request, reply) {
    return users
  })
}
