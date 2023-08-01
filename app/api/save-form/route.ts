import { NextResponse } from "next/server";
import prisma from "../../../components/prisma";




export async function POST(req:any,res:any) {
  // Do whatever you want
  const body= await req.json();

  const userid=body.userid;
  const form_id=BigInt(body.form_id);

  async function handleDB() {

    const allforms = await prisma.forms.findMany({
      where: { form_id: BigInt(form_id) },
    });


   
    if (allforms.length > 0) {
      await prisma.forms.update({
        where: {
          form_id: BigInt(form_id),
        },
        data: {
          form_data: JSON.stringify(body),
        },
      });
    
    
      

    } 
    else
     {
      await prisma.forms.create({
        data: {
          form_id: BigInt(form_id),
          form_data: JSON.stringify(body),
          userid:userid
        },
      });
    }
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
