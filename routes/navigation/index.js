'use strict'
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
    const nav = await prisma.navigation.findMany()
  fastify.get('/', async function (request, reply) {
    return nav
  })
}
