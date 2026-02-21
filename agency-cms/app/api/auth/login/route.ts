import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;

    const user = await prisma.admin.findUnique({
      where: { username },
    });
      console.log("USER:", user);

    if (!user) {
      return Response.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return Response.json(
        { message: "Password salah" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return Response.json({ token });

  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
