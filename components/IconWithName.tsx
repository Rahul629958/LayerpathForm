import Image from "next/image";
import iconPic from '../public/form_icon_main.png'
import Link from "next/link";

export default function IconName()
{
    return (
        <div className=" ml-12 mt-8 text-[2rem] font-semibold text-blue-900 pr-1 inline-block" >
          
        <Image
          src={iconPic}
          alt="icon"
          width={80}
          height={80}
          className="cursor-pointer inline mr-4"
        />
       <span className="cursor-pointer" style={{textDecorationStyle:"solid"}}>LayerPath form creator</span> 
      
      </div>
    );
}