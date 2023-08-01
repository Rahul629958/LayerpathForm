"use client";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Form from "./Form";
import Loading from "./Loading";

export default function (props: any) {

  const form_id = props.id;

  const [isLoading,setLoading] = useState(true);
  const [correctLink, setLinkCorrect] = useState(true);
  const [formValues,setFormValues] = useState({
    contents: 
    {
      title1: "" , description1:"" ,isField1:false,//title: label, description: placeholder, isField: weather selected
      title2: "" , description2:"" ,isField2:false,
      title3: "", description3:"",isField3:false,
      title4: "", description4:"",isField4:false,
      title5: ""  , description:"" ,isField5:false
    },

    styles: 
    {
      fontSize: 0.8,
      fontStyle: "normal",
      fontFamily: "sans-serif",
      fontColor: "#000000",
      fontWeight: 400,
      bgColor: "#ffffff",
    },

    form_id: form_id,
  });

 
  

  useEffect(()=>
  {

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:form_id,
        });
  
        if (response.ok) {
          const responseData = await response.json();
          const responseJSON = responseData;
          console.log("THis is responseDat0:", responseJSON); // Data received successfully
          // setFormValues(JSON.parse(responseData));
  
          if(BigInt(responseJSON.form_id) <0)
          {
            console.log("here is error of id");
            setLinkCorrect(false);
            setLoading(false);
          }else{
          setFormValues(responseJSON);
          setLoading(false);
          }
        } else {
          console.error("Error:", response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
     fetchData();
  },[])






  const [field1, setValueField1] = useState("");
  const [field2, setValueField2] = useState("");
  const [field3, setValueField3] = useState("");
  const [field4, setValueField4] = useState("");
  const [field5, setValueField5] = useState(false);


  const [responseValue,setResponseValue] = useState({
     isField1:formValues.contents.isField1,  title1: formValues.contents.title1,value1: field1,
     isField2:formValues.contents.isField2,  title2: formValues.contents.title2,value2: field2,
     isField3:formValues.contents.isField3,  title3: formValues.contents.title3,value3: field3,
     isField4:formValues.contents.isField4,  title4: formValues.contents.title4,value4: field4,
     isField5:formValues.contents.isField5,  title5: formValues.contents.title5,value5: field5,
     response_id:new Date().getTime(),
     form_id:form_id
  })

  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setResponseValue({
     isField1:formValues.contents.isField1,  title1: formValues.contents.title1,value1: field1,
     isField2:formValues.contents.isField2,  title2: formValues.contents.title2,value2: field2,
     isField3:formValues.contents.isField3,  title3: formValues.contents.title3,value3: field3,
     isField4:formValues.contents.isField4,  title4: formValues.contents.title4,value4: field4,
     isField5:formValues.contents.isField5,  title5: formValues.contents.title5,value5: field5,
     response_id:new Date().getTime(),
     form_id:form_id
    });
  }, [field1,field2,field3,field4,field5]);

  


  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/post-response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseValue),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("THis is responseDat:", responseData); // Data received successfully
        // setFormValues(JSON.parse(responseData));
        setValueField1("");
        setValueField2("");
        setValueField3("");
        setValueField4("");
        setValueField5(false);
        setSubmitted(true);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    {
      correctLink?
      <div className="container pt-4 pb-4">

        {isLoading?<Loading height={300} />:
        <div className="row">
          <div className="col-sm-1 col-xs-1 col-md-3 h-[80vh]"></div>

          {isSubmitted ? (
            <>
              <div className=" col-sm-10 col-xs-10 col-md-6 h-[40vh] shadow-lg pt-[12vh] rounded-lg text-center font-extrabold text-2xl">
                Form Submitted!
                <div className="pt-[6vh]">
                  <button
                    className="btn btn-outline-success "
                    onClick={(e) => setSubmitted(false)}
                  >
                    Submit another response
                  </button>
                </div>
              </div>
            </>
          ) :(
            <div
              className={
                "col-sm-10 col-xs-10 col-md-6 h-[90vh] shadow-lg p-4 rounded-lg overflow-y-scroll"
              }
              style={{ backgroundColor: formValues.styles.bgColor }}
            >
              <div
                className={
                  " text-center font-bold text-lg text-blue-500 bg-white"
                }
              >
                LayerPath Forms
              </div>
              <hr />
              <br />
              <Form
                formValues={formValues}
                forFilling={true}
                setField1={setValueField1}
                setField2={setValueField2}
                setField3={setValueField3}
                setField4={setValueField4}
                setField5={setValueField5}
                field5={field5}
              />
              <div className=" text-right mr-4">
                <button className="btn btn-info" onClick={(e) => handleClick()}>
                  Submit
                </button>
              </div>
            </div>
          )}

          <div className="col-sm-1 col-xs-1 col-md-3 h-[80vh]"></div>
        </div>


              }


      </div>
      :
      <NotFound />
}
    </>
  );
}
