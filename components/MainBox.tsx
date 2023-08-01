"use client";

import { useEffect, useState } from "react";
import Form from "./Form";
import IconName from "./IconWithName";
import NotFound from "./NotFound";
import Tabs from "./Tabs";
import Loading from "./Loading";
import { getAuth } from "firebase/auth";
import app from "./Firebase"
const App = app;
export default function MainBox(props: any) {


  const [id,setFormID] = useState(props.id);
  
  const [isLoading,setLoading] = useState(props.id>0?true:false);
  const [Link,setLink] = useState("");
  const [correctLink,setCorrectLink] = useState(true);
 

  




  const [fontSize, setFontSize] = useState(0.8);
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [fontColor, setFontColor] = useState("#000000");
  const [fontWeight, setFontWeight] = useState(400);
  const [bgColor, setBgColor] = useState("#ffffff");

  const [title1,setTitle1]=useState("First Name");
  const [title2,setTitle2]=useState("Last Name");
  const [title3,setTitle3]=useState("Email");
  const [title4,setTitle4]=useState("Phone Number");
  const [title5,setTitle5]=useState("Double Opt-In");
  
  const [description1,setDescription1]=useState("Enter first name.");
  const [description2,setDescription2]=useState("Enter last name");
  const [description3,setDescription3]=useState("Enter your email address");
  const [description4,setDescription4]=useState("Enter Phone number");
  const [description5,setDescription5]=useState("Write description here.");
  
  const [isField1,setField1]=useState(false);
  const [isField2,setField2]=useState(false);
  const [isField3,setField3]=useState(false);
  const [isField4,setField4]=useState(false);
  const [isField5,setField5]=useState(false);

  const [formValues,setFormValues] = useState({
    contents: 
    {
      title1: title1 , description1:description1 ,isField1:isField1,//title: label, description: placeholder, isField: weather selected
      title2: title2 , description2:description2 ,isField2:isField2,
      title3: title3, description3:description3 ,isField3:isField3,
      title4: title4, description4:description4 ,isField4:isField4,
      title5: title5  , description5:description5 ,isField5:isField5
    },

    styles: 
    {
      fontSize: fontSize,
      fontStyle: fontStyle,
      fontFamily: fontFamily,
      fontColor: fontColor,
      fontWeight: fontWeight,
      bgColor: bgColor,
    },

    form_id: id,
    userid:getAuth().currentUser?.uid
  });




useEffect(()=>
{
  setFormValues(
    {
    contents: 
    {
      title1: title1 , description1:description1 ,isField1:isField1,//title: label, description: placeholder, isField: weather selected
      title2: title2 , description2:description2 ,isField2:isField2,
      title3: title3, description3:description3 ,isField3:isField3,
      title4: title4, description4:description4 ,isField4:isField4,
      title5: title5  , description5:description5 ,isField5:isField5
    },

    styles: 
    {
      fontSize: fontSize,
      fontStyle: fontStyle,
      fontFamily: fontFamily,
      fontColor: fontColor,
      fontWeight: fontWeight,
      bgColor: bgColor,
    },

    form_id: id,
    userid:getAuth().currentUser?.uid
  }
  )

  console.log(formValues);

},[title1,title2,title3,title4,title5,
description1,description2,description3,description4,description5,
isField1,isField2,isField3,isField4,isField5,
fontSize,fontStyle,fontFamily,fontColor,fontWeight,bgColor,id])



function setVariable(formV:any)
{
  setTitle1(formV.contents.title1);
  setTitle2(formV.contents.title2);
  setTitle3(formV.contents.title3);
  setTitle4(formV.contents.title4);
  setTitle5(formV.contents.title5);

  setDescription1(formV.contents.description1);
  setDescription2(formV.contents.description2);
  setDescription3(formV.contents.description3);
  setDescription4(formV.contents.description4);
  setDescription5(formV.contents.description5);

  setField2(formV.contents.isField2);
  setField1(formV.contents.isField1);
  setField3(formV.contents.isField3);
  setField4(formV.contents.isField4);
  setField5(formV.contents.isField5);

  setFontSize(formV.styles.fontSize);
  setFontColor(formV.styles.fontColor);
  setFontWeight(formV.styles.fontWeight);
  setFontFamily(formV.styles.fontFamily);
  setFontStyle(formV.styles.fontStyle);
  setBgColor(formV.styles.bgColor);
}




useEffect(()=>
{
  if(BigInt(props.id)>0){
    const fetchData= async () => {
      try {
        console.log("Here it reaahches");
        const response = await fetch("http://localhost:3000/api/get-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:id,
        });
  
        if (response.ok) {
          const responseData = await response.json();
          const responseJSON = responseData
          setLink("http://localhost:3000/form/"+id);
          if(BigInt(responseJSON.form_id) <0)
          {
            console.log("here is error of id");
            setCorrectLink(false);
            setLoading(false);
          }else{
          setFormValues(responseJSON);
          // console.log("This is responseJSON: ",responseJSON)
          setVariable(responseJSON);
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
    }
},[])
 

  if(id<0)
  {
    setFormID(new Date().getTime());
  }



  // const [formVars, setFormVars] = useState({
  //   contents: {
  //     isfirstName: false,
  //     isLastName: false,
  //     isEmail: false,
  //     isPhone: false,
  //     isDOI: false,
  //     textVal: "",
  //   },
  //   styles: {
  //     fontSize: 0.8,
  //     fontWeight: 400,
  //     fontStyle: "normal",
  //     fontFamily: "sans-serif",
  //     fontColor: "#000000",
  //     bgColor: "#ffffff",
  //   },
  //   form_id: id,
  // });

  // useEffect(() => {
  //   setFormVars({
  //     contents: {
  //   title1: title1 , description1:description1 ,isField1:isField1,//title: label, description: placeholder, isField: weather selected
  //   title2: title2 , description2:description2 ,isField2:isField2,
  //   title3: title3, description3:description3 ,isField3:isField3,
  //   title4: title4, description4:description4 ,isField4:isField4,
  //   title5: title5  , description5:description5 ,isField5:isField5
  //     },
  //     styles: {
  //       fontSize: fontSize,
  //       fontWeight: fontWeight,
  //       fontStyle: fontStyle,
  //       fontFamily: fontFamily,
  //       fontColor: fontColor,
  //       bgColor: bgColor,
  //     },
  //     form_id: id,
  //   });
  // }, [
  //   title1,description1,isField1,
  //   title2,description2,isField2,
  //   title3,description3,isField3,
  //   title4,description4,isField4,
  //   title5,description5,isField5,
  //   fontSize,
  //   fontWeight,
  //   fontStyle,
  //   fontFamily,
  //   fontColor,
  //   bgColor,
  // ]);

  async function handleClick() {
    try {
      const response = await fetch("http://localhost:3000/api/save-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const responseData = await response.json();
        setLink("http://localhost:3000/form/"+id);
        alert("Saved successfully.");
      } else {
        console.error("Error:", response.statusText);
        alert("Error"+response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
<>
    {
      correctLink?
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12">
            <IconName />
          </div>
          <div className="col h-28 pt-8">
            <div className=" shadow-md rounded-full h-12 p-1 row">
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <button
                  className="btn btn-outline-success"
                  onClick={(e) => handleClick()}
                >
                  Save/Update
                </button>
              </div>
              
              <div className="col pl-4">
            
              <a href={Link} target="_blank">{Link}</a>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2 rounded-[5rem] w-[80%] overflow-hidden shadow-lg">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12 h-[80vh] p-4">
            <Tabs
               formValues={formValues}

               setFontSize={setFontSize}
               setFontStyle={setFontStyle}
               setFontFamily={setFontFamily}
               setFontColor={setFontColor}
               setFontWeight={setFontWeight}
               setBgColor={setBgColor}

               setTitle1={setTitle1}
               setTitle2={setTitle2}
               setTitle3={setTitle3}
               setTitle4={setTitle4}
               setTitle5={setTitle5}

               setDescription1={setDescription1}
               setDescription2={setDescription2}
               setDescription3={setDescription3}
               setDescription4={setDescription4}
               setDescription5={setDescription5}

               setField1={setField1}
               setField2={setField2}
               setField3={setField3}
               setField4={setField4}
               setField5={setField5}

            />
          </div>

          <div className="col h-[80vh] p-[6vh] bg-[blanchedalmond] border-l-[2px] border-l-orange-500">
            <div
              className="container formSec col-sm-12 col-md-8 col-lg-6 rounded-2xl h-[64vh] pt-8 pl-2 pr-2 overflow-y-scroll overflow-x-scroll"
              style={{ background: bgColor }}
            >{isLoading?<Loading height={200}/>:
              <Form
               formValues={formValues}
               forFilling={false}
              />
              
            }
            </div>
          </div>
        </div>
      </div>
    </>
    :
    <NotFound />
}
</>
  );
}
