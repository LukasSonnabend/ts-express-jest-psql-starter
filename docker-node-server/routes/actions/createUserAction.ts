import { PrismaClient, User } from "@prisma/client";

export interface CreateUserActionParams {
  prisma: PrismaClient;
  name: string;
  email: string;
  password: string;
}


const createUserAction = async ({ prisma, name, email, password }: CreateUserActionParams): Promise<User> => {

  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    }
  })
}


export default createUserAction;
