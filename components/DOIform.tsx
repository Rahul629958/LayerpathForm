export default function DOIform(props: any) {

  return (
    <>
      <div
        className="row"
        style={{
          borderRadius: "1rem",
          borderWidth: "1px",
          borderStyle: "solid",
          overflow: "hidden",
        }}
      >
        <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
          {props.makeDisable ? (
            <input disabled type="checkbox" className=" mt-3" />
          ) : (
            <input
              type="checkbox"
              className=" mt-3"
              checked={props.isChecked}
              onChange={(e) => props.setField(e.target.checked)}
            />
          )}
        </div>
        <div className="col overflow-scroll h-16 mr-[0.2rem]">
          <span className=" underline font-extrabold">{props.title}</span>
          <br />
          {props.description}
        </div>
      </div>
    </>
  );
}
