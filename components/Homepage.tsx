"use client";

import IconWithName from "./IconWithName";
import HomepageFormList from "./HomepageFormList";
import { useEffect, useState } from "react";
import ResponseOverview from "./ResponseOverview";
import Loading from "./Loading";
import Link from "next/link";

export default function Homepage( props:any) {
  const [arr, setArr] = useState([]);
  const [isLoading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("This is props.uid: ",props.uid);
        const response = await fetch("http://localhost:3000/api/get-form-id", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(props.uid),
        });

        if (response.ok) {
          const responseData = await response.json();
          const responseJSON = responseData;
          console.log("THis is responseDat0:", responseJSON); // Data received successfully
          // setFormValues(JSON.parse(responseData));
          responseJSON.arr.sort((a:any, b:any) => {
            let fa = a.form_id,
                fb = b.form_id;
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        });
          setArr(responseJSON.arr);
          setLoading(false);
          // console.log("THi sis final arr: ",arr);
        } else {
          setLoading(false)
          alert("Error:" + response.statusText);
        }
      } catch (error) {
        setLoading(false);
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  // const arr=[{form_id:1689281529111},{form_id:4567},{form_id:7890}]

  return (
    <>

    <div className="row">
      <div className="col-md-6">     
         <IconWithName />
      </div>
      
      <div className="col-md-4">
        <div className="container-fluid">
      <div className="cursor-pointer bg-blue-500 hover:bg-blue-950 rounded-lg mt-8 text-center font-semibold h-10 ml-20">
        <Link href={"/create-new"} target="_blank" style={{textDecoration:"none",color:"white"}}>
       <div><span style={{fontSize:"1.5rem"}}>+</span> Create New</div>
        </Link>
      </div>
      </div>
      </div>
      <div className="col text-left">
        <button className="btn btn-danger mt-8" onClick={(e)=>(props.signOutFunc())}>Sign Out</button>
      </div>

      </div>





      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-lg-7 mb-2">
            <div className="row h-10 text-2xl  bg-slate-200 pt-1">
              <div className="col">Forms</div>
            </div>
            <div className="row h-[70vh]">
             <HomepageFormList arr={arr} isLoading={isLoading}/>
            </div>
          </div>

          <div
            className="col "
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "darkgray",
            }}
          >
            <div className="row h-10 text-2xl bg-slate-300">
              <div className="col">View Responses</div>
            </div>
            <div className="row h-[70vh] overflow-y-scroll p-2">
              <div className="container pt-2">
                {arr.length>0?arr.map((e: any) => (
                  <ResponseOverview id={e.form_id} key={e.form_id} />
                )):isLoading?<Loading height={50}/>:
                <div className=" text-center mt-4">
            <p>No Response Yet</p>
            </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
