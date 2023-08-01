import icon_response from "../public/icon_response.png";
import Image from "next/image";
import Link from "next/link";
export default function (props: any) {
  const id = props.id;
  return (
    <>
    <Link href={"/responses/"+id} target="_blank" style={{textDecoration:"none"}}>      
    <div className="row h-12 mt-2 p-1 rounded-md bg-green-100 hover:bg-green-200 cursor-pointer">
        <div className="col-md-2 col-sm-1 col-xs-1">
          <Image src={icon_response} className="mt-1" height={30} alt={"icon"}></Image>
        </div>
        <div className="col">
          <div className="row">
            <div className="col h-5 text-base text-green-500 font-semibold">
              <span className=" font-normal text-sm text-black">Form id:</span> {id}
            </div>
          </div>
          <div className="row">
            <div className="col text-sm " style={{fontStyle:"oblique"}}>
            Click to view
            </div>
          </div>
        </div>
      </div>
      </Link>

    </>
  );
}
