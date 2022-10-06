const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function main(){
  await prisma.user.create({ data: { name: "John Doe" } })
  const data = await prisma.user.findMany()
  console.log(data)
}

main()
