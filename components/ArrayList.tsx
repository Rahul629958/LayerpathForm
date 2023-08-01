export default function(props:any)
{
   const val= [{
        title: "Field 1",
        value:props.title1,
        placeholder: props.description1,
        type: "text",
        isSelected: props.isField1,
      },
      {
        title: "Field 2",
        value: props.title2,
        placeholder: props.description2,
        type: "text",
        isSelected: props.isField2,
      },
      {
        title: "Field 3",
        value:props.title3,
        placeholder: props.description3,
        type: "text",
        isSelected: props.isField3,
      },
      {
        title: "Field 4",
        value:props.title4,
        placeholder:props.description4,
        type: "text",
        isSelected: props.isField4,
      },
      {
        title: "Field 5",
        value:props.title5,
        description:props.description5,
        type: "text",
        isSelected: props.isField5,
      }]

      return val;
}