import createUserAction from "../routes/actions/createUserAction";
import { faker } from "@faker-js/faker";
import { PrismaClient} from "@prisma/client";



const prisma = new PrismaClient();

// after all tests are done, close the prisma client

afterAll(async () => {
  await prisma.$disconnect();
} );


describe("createUserAction Unit Test", () => {

  it("creates User", async () => {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const name = faker.name.fullName()

    await createUserAction({ prisma, name, email, password })

    const [savedUser] = await prisma.user.findMany({
      where: { email },
      take: 1,
    });

    expect(savedUser.email).toBe(email);

    // remove the user from the database
    await prisma.user.delete({
      where: { id: savedUser.id },
    });

  })
})