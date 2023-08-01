import { NextResponse } from "next/server";
import prisma from "../../../components/prisma";




export async function POST(req:any,res:any) {

   const body= await req.json();
   const form_id = BigInt(body.form_id);
   const response_id = BigInt(new Date().getTime());


  async function handleDB() {
      await prisma.responses.create({
        data: {
          response_id: response_id,
          form_id: form_id,
          response_data:JSON.stringify(body)
        },
      });
    
  }

  handleDB()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });





  // console.log(body);
  return NextResponse.json({ message: JSON.stringify(body) }, { status: 200 });
}
