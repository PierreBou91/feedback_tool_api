import { PrismaClient, IsCritical } from '@prisma/client'
import mock_companies from '../data/mock_companies.json'
import mock_users from '../data/mock_users.json'
import mock_feedbacks from '../data/mock_feedbacks.json'
import mock_comments from '../data/mock_comments.json'


const prisma = new PrismaClient()


async function main() {

    let finalFeedbackList: any = []
    mock_feedbacks.forEach((feedback) => {
      feedback.isCritical = feedback.isCritical as IsCritical
      finalFeedbackList.push(feedback)
    })
    await prisma.comment.deleteMany({})
    console.log('deleted all comments');
    await prisma.feedback.deleteMany({})
    console.log('deleted all feedbacks');
    await prisma.user.deleteMany({})
    console.log('deleted all users');
    await prisma.company.deleteMany({})
    console.log('deleted all companies');
    await prisma.company.createMany({
        data: mock_companies
    })
    console.log('created all companies');
    await prisma.user.createMany({
        data: mock_users
    })
    console.log('created all users');
    await prisma.feedback.createMany({
        data: finalFeedbackList
    })
    await prisma.feedback.updateMany({
        where: {
          id: {contains: "5"}
        },
        data: {
          closedAt: new Date('2022-08-08T01:57:45.271Z')
        }
      })
    console.log('created all feedbacks');
    await prisma.comment.createMany({
        data: mock_comments
    })
    console.log('created all comments');
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