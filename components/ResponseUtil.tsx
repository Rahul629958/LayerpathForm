import ResponseRow from "./ResponseRow";

export default function(props:any)
{
    console.log("Data reached: ",props);
    const propsObject = JSON.parse(props.data.response_data);
    

    return (
        <>
        <div className="row h-60 mt-4 bg-green-200 rounded-2xl p-3">
            <div className="row h-8 font-semibold">
             Response id: {props.data.response_id}
            </div>
           {propsObject.isField1?<ResponseRow data={propsObject.title1} dataResponse={propsObject.value1} />:<></>}
           {propsObject.isField2?<ResponseRow data={propsObject.title2} dataResponse={propsObject.value2} />:<></>}
           {propsObject.isField3?<ResponseRow data={propsObject.title3} dataResponse={propsObject.value3} />:<></>}
           {propsObject.isField4?<ResponseRow data={propsObject.title4} dataResponse={propsObject.value4} />:<></>}
           {propsObject.isField5?<ResponseRow data={propsObject.title5} dataResponse={propsObject.value5?"true":"false"} />:<></>}
        </div>
        </>
    )
}