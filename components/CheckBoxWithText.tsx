import { useEffect, useState } from "react";
// import Tabs from "./Tabs";
import EditTextDialog from "@/components/EditTextDialog"
export default function CheckBoxWithText(props: any) {
  
  return (
    <>
      <div
        className=
          "row cursor-pointer align-middle content-center h-14 rounded-2xl border mr-4 mb-2 text-[1.1rem]"
      >
        <div onClick={(e) => props.setSelected(!props.isSelected)} className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={(e) => props.setSelected(!props.isSelected)}
            />
          </div>
          <div className="col">{props.title}</div>
          <div className="col-md-2">  <EditTextDialog isDOI={props.isDOI} title={props.title} description={props.description} 
          setTitle={props.setTitle} setDescription={props.setDescription}/> </div>
        </div>
      </div>
    </>
  );
}
