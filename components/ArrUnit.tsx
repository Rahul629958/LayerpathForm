import iconPic from "../public/form_icon_main.png";
import Image from "next/image";
import Link from "next/link";

export default function ArrUnit(props: any) {
  return (
    <>
      <Link
        href={"/edit-form/" + props.id}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <div className="row bg-blue-200 hover:bg-blue-300 rounded-3xl mt-2 pt-1 h-20 overflow-y-scroll cursor-pointer">
          <div className="col-lg-2 col-md-2 col-sm-1 h-10">
            <Image
              src={iconPic}
              alt="icon"
              height={50}
              className=" pt-2 pl-2"
            />
          </div>
          <div className="col">
            <div className="row h-6 overflow-y-scroll mt-2">
              <div className="col text-lg font-bold ">Form ID: {props.id}</div>
            </div>
            <div className="row h-4 overflow-y-scroll">
              <div className="col text-sm">
                Created On: {new Date(Number(props.id)).toString()}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
