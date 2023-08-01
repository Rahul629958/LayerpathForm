import MainBox from "@/components/MainBox";


export default function (props:any){

const form_id = props.params.form_id;

  return (
    <MainBox
      id={form_id}
    />
  );
}

