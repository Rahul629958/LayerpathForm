import { useEffect, useState } from "react";
import DOIform from "./DOIform";

export default function FillForm(props: any) {
 

  return (
    <>
      {props.isDOI ? (
         <DOIform makeDisable={props.makeDisable} title={props.title} description={props.description} setField={props.setField} isChecked={props.isChecked}/>
      ) : (
        <>
          <p>{props.title}</p>
          {props.makeDisable ? (
            <input
              
              disabled
              className="w-[80%] h-fit pt-2 pr-2 pl-2 border-b-2 border-b-green-500 mt-[-0.25rem] "
              type="text"
              placeholder={props.description}
            />
          ) : (
            <input
            
              className="w-[80%] h-fit pt-2 pr-2 pl-2 border-b-2 border-b-green-500 mt-[-0.25rem] bg-gray-300"
              type="text"
              placeholder={props.description}
              onChange={(e) => props.setField(e.target.value)}
            />
          )}{" "}
          <br />
          <br />
        </>
      )}
    </>
  );
}
