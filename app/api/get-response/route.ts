import { NextResponse } from 'next/server';
import prisma from '../../../components/prisma';




(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};



export async function POST(req: Request){

    const  body = await req.json();

  try {
  const form_id = body;

  const allforms = await prisma.responses.findMany({
    where:
    {
       form_id: BigInt(form_id)
    },
  });
   console.log("This is all forms: " ,allforms);
    return NextResponse.json({arr:allforms})

}

    
catch (err) {
  console.log("second error ");
   console.log(err);
    return NextResponse.json({ form_id: -1})
  }
}