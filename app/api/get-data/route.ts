import { NextResponse } from 'next/server';
import prisma from '../../../components/prisma';



export async function POST(req: Request){
  const  body = await req.json();
  try {
    
    const form_id=body

  const allforms = await prisma.forms.findMany({
    where: { form_id: BigInt(form_id) },
  });

  if (allforms.length > 0) {
     const formData = JSON.parse(allforms[0].form_data);
    return NextResponse.json(formData);
  } 
  else
   {

    return NextResponse.json({form_id:-1});
  }
}

// handleDB()
//     .then(async (e) => {
//       formValues=await e;
//       await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//       console.error(e);
//       await prisma.$disconnect();
//       process.exit(1);
//     });







    
catch (err) {
  console.log("second error ");

    return NextResponse.json({ form_id: -1})
  }
}