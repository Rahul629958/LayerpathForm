import FillForm from "./FillForm";

export default function Form(props: any) {
  const contents = props.formValues.contents;
  const styles = {
    fontSize: props.formValues.styles.fontSize.toString() + "rem",
    fontWeight: props.formValues.styles.fontWeight.toString(),
    color: props.formValues.styles.fontColor,
    fontStyle: props.formValues.styles.fontStyle,
    fontFamily: props.formValues.styles.fontFamily,
    backgroundColor: props.formValues.styles.bgColor,
  };
  var makeDisable = true;
  if (props.forFilling == true) {
    makeDisable = false;
  }


  return (
    <>
      <div className=" pr-2 pl-2 pb-2 " style={styles}>
     {contents.isField1?
     <FillForm 
     title={contents.title1}
     description={contents.description1}
     makeDisable={makeDisable}
     isDOI={false}
     style={styles}
     setField={!makeDisable? props.setField1:""}
     />:<></>
     }
     {contents.isField2?
     <FillForm 
     title={contents.title2}
     description={contents.description2}
     makeDisable={makeDisable}
     isDOI={false}
     style={styles}
     setField={!makeDisable? props.setField2:""}
     />:<></>
     }
     {contents.isField3?
     <FillForm 
     title={contents.title3}
     description={contents.description3}
     makeDisable={makeDisable}
     isDOI={false}
     style={styles}
     setField={!makeDisable? props.setField3:""}
     />:<></>
     }
     {contents.isField4?
     <FillForm 
     title={contents.title4}
     description={contents.description4}
     makeDisable={makeDisable}
     isDOI={false}
     style={styles}
     setField={!makeDisable? props.setField4:""}
     />:<></>
     }
     {contents.isField5?
     <FillForm 
     title={contents.title5}
     description={contents.description5}
     makeDisable={makeDisable}
     isDOI={true}
     style={styles}
     setField={!makeDisable? props.setField5:""}
     isChecked={!makeDisable?props.field5:false}
     />:<></>
     }

      </div>
    </>
  );
}
