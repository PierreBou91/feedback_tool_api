'use strict'
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {
    const companies = await prisma.company.findMany()
  fastify.get('/', async function (request, reply) {
    return companies
  })
}
