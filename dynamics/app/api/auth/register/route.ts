import { NextApiRequest, NextApiResponse } from 'next';
import User from "../../../models/User";
import connect from "../../../utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return new NextResponse(err.message, { status: 500 });
    } else {
      // If the error is not an Error instance, you might want to return a generic error message
      return new NextResponse('An unexpected error occurred', { status: 500 });
    }
  }
  
};
