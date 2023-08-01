import { NextResponse } from 'next/server';
import prisma from '../../../components/prisma';
import { stringify } from 'querystring';




(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};



export async function POST(req: Request){
  const body = await req.json();
  try {

  const allforms = await prisma.forms.findMany({
    where:
    {
      userid:body
    },
    select:
    {
        form_id:true,
        form_data:false
    }
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