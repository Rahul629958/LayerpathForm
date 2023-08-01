import { useState } from "react";
import ArrUnit from "./ArrUnit";
import Link from "next/link";
import Loading from "./Loading";
export default function HomepageFormList(props: any) {
  // const [arr, setArr] = useState([1689288847360,1689288846360,1689288827360]);
  const arr = props.arr;
  const isLoading=props.isLoading;
  // console.log("THis is arrV: ",arr);

  return (
    <>
    
      <div className="col">
        <div className="container pt-3 h-[70vh] overflow-y-scroll">
          {isLoading?<Loading height={300}/>:arr.length>0? arr.map((e: any) => (
            <>
              <ArrUnit id={e.form_id} key={e.form_id} />
            </>
          )):
          <div className=" text-center mt-28">
            <h1>No Form Created</h1>
            </div>}
        </div>
      </div>
    </>
  );
}
