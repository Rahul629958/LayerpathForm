import ResponseView from "@/components/ResponseView"

export default function(props:any)
{
   return (
     <ResponseView id={props.params.form_id} />
   )
}