import loadingIcon from "../public/loading.gif"
import Image from "next/image"

export default function(props:any)
{ const height = props.height;
    return(
        <>
     <div className="container ">
      <Image src={loadingIcon} alt="loading..." height={height} style={{marginLeft:"40%"}} ></Image>
     </div>
        </>
    )
}