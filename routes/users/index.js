'use strict'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const users = await prisma.user.findMany()
    return users
  })

  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    })
    return user
  })
}
