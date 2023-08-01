import CheckBoxWithText from "./CheckBoxWithText";
import Tabs from "./Tabs";
import EditTextDialog from "./EditTextDialog"
import { useEffect } from "react";
function selectBox(props: any) {
  

  return (
    <>
   
      <div className="selectBox pl-[1rem] pr-4 pt-[2rem] rounded-[1rem] h-[65vh]" >
        {/* {props.arrayVal.map((e:any) => (
          <CheckBoxWithText
            obj={e}
            func={
              e.title.includes("First")
                ? props.setfirstName
                : e.title.includes("Last")
                ? props.setLastName
                : e.title.includes("Email")
                ? props.setEmail
                : e.title.includes("Phone")
                ? props.setPhone
                : props.setDOI
            }
            setTextVal={props.setTextVal}
            textVal={props.textVal}
            key={e.title}
          />
        ))} */}

     <CheckBoxWithText
     title={props.formValues.contents.title1}
     description={props.formValues.contents.description1}
     isSelected={props.formValues.contents.isField1}
     setTitle={props.setTitle1}
     setDescription={props.setDescription1}
     setSelected={props.setField1}

     isDOI={false}
     />
     <CheckBoxWithText
     title={props.formValues.contents.title2}
     description={props.formValues.contents.description2}
     isSelected={props.formValues.contents.isField2}
     setTitle={props.setTitle2}
     setDescription={props.setDescription2}
     setSelected={props.setField2}

     isDOI={false}
     />
     <CheckBoxWithText
     title={props.formValues.contents.title3}
     description={props.formValues.contents.description3}
     isSelected={props.formValues.contents.isField3}
     setTitle={props.setTitle3}
     setDescription={props.setDescription3}
     setSelected={props.setField3}

     isDOI={false}
     />
     <CheckBoxWithText
     title={props.formValues.contents.title4}
     description={props.formValues.contents.description4}
     isSelected={props.formValues.contents.isField4}
     setTitle={props.setTitle4}
     setDescription={props.setDescription4}
     setSelected={props.setField4}

     isDOI={false}
     />
     <CheckBoxWithText
     title={props.formValues.contents.title5}
     description={props.formValues.contents.description5}
     isSelected={props.formValues.contents.isField5}
     setTitle={props.setTitle5}
     setDescription={props.setDescription5}
     setSelected={props.setField5}
     
     isDOI={true}
     />






      </div>
    </>
  );
}

export default selectBox;
