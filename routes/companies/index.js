'use strict'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
    const companies = await prisma.company.findMany()
    return companies
  })

  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params
    const company = await prisma.company.findUnique({
      where: {
        id: id
      }
    })
    return company
  })
}
