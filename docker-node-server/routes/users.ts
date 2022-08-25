import express from 'express';
import { PrismaClient, User } from "@prisma/client";
import createUserAction from './actions/createUserAction';

const prisma = new PrismaClient();
const router = express.Router();

router // return all products
  .post('/', async(req, res) => {
    // check if all required fields are present

    if (!req.body.name || !req.body.email || !req.body.password) {
      res.status(400).json({
        message: 'All fields are required',
      });
    } else {

      const name: string = req.body.name;
      const email: string = req.body.email;
      const password: string = req.body.password;



      const User = await createUserAction({ prisma, name, email, password })

      res.json({
        user : {
          id: User.id,
          name: User.name,
          email: User.email,
        },
        message: 'User created',
      });

    }



  })


export default router;
