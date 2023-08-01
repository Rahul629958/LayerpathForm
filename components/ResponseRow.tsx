export default function(props:any)
{

    return (
        <>
         <div className="row h-8 hover:bg-green-400 p-1 group">
            <div className="col-md-4">
                {props.data}
            </div>
            <div className="col text-green-700 font-semibold group-hover:text-white group-hover:from-neutral-400">
                {props.dataResponse}
            </div>
            </div>
        </>
    )

}