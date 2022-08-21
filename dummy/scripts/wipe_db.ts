import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.feedback.deleteMany({})
    console.log('deleted all feedbacks');
    await prisma.user.deleteMany({})
    console.log('deleted all users');
    await prisma.company.deleteMany({})
    console.log('deleted all companies');
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })