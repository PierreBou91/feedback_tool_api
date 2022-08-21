import { PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()


async function main() {
    const nav = [
        {
            title: "Feedbacks",
            href: "/",
            target: null,
            rel: null,
        },
        {
            title: "Companies",
            href: "/companies",
            target: null,
            rel: null,
        },
        {
            title: "Users",
            href: "/users",
            target: null,
            rel: null,
        }
    ]
    await prisma.navigation.deleteMany({})
    console.log('deleted all navs');
    const navigation = await prisma.navigation.createMany({
        data: nav
    })
    console.log("Added navigation items")
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