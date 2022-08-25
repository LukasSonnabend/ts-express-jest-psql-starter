import request from 'supertest'
import {app, server} from '../server';
import { faker } from "@faker-js/faker";
import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
const addedData: number[] = [];




afterAll(async () => {

  addedData.forEach(async (data) => {
    await prisma.user.delete({
      where: { id: data },
    });
  })

  await new Promise(resolve => setTimeout(() => resolve(true), 500)); // avoid jest open handle error

  await prisma.$disconnect();
  server.close();

});


describe('POST /api/users', () => {

  describe("only name + email ", () => {
    it('should return 400', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          name: faker.name.fullName(),
          email: faker.internet.email(),
        }).set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        expect(response.statusCode).toBe(400);
    });
  })

  describe("All Parameters ", () => {

    const data = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }


    it('should return 200', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          name: data.name,
          email: data.email,
          password: data.password
        }).set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        // .expect(response => {console.log(response)})



        expect(response.statusCode).toBe(200);
        expect(response.body.user.email).toBe(data.email);
        expect(response.body.user.name).toBe(data.name);
        expect(response.body.message).toBe("User created");
        expect(response.body.user.password).toBeUndefined();


        addedData.push(response.body.user.id)
    });
  })




});


