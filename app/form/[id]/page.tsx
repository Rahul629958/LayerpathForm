import ViewForm from "@/components/ViewForm";
import NotFound from "@/components/NotFound";
export default function(props:any)
{
    return <ViewForm id={props.params.id} />
    // return <NotFound />
}