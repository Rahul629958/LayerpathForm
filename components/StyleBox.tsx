function StyleBox(props: any) {
  //{fontSize:"1.1rem",color:"black",fontStyle:"normal",fontWeight:"400",fontFamily:"sans-serif"}
  return (
    <>
      <div className="styleBox pl-[1rem] pr-4 pt-[2rem] rounded-[1rem] h-[65vh]">
        <div className="container-fluid overflow-y-scroll">
          <div className="row my-4 rounded-lg shadow-sm pt-2 pb-2">
            {" "}
            <div className="col"> Font size </div>
            <div className="col-8">
              <button
                className="btn btn-outline-info mx-2"
                onClick={(e) =>
                  props.fontSize >= 0.1 &&
                  props.setFontSize(props.fontSize - 0.1)
                }
              >
                -
              </button>
              <span>{props.fontSize.toFixed(1)}</span>
              <button
                className="btn btn-outline-info mx-2"
                onClick={(e) => props.setFontSize(props.fontSize + 0.1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="row my-4 rounded-lg shadow-sm pt-2 pb-2 ">
            <div className="col">Choose text color </div>
            <input
              type="color"
              className="col-6 rounded-full pt-1 pb-1 bg-white shadow-xl cursor-pointer"
              onChange={(e) => props.setFontColor(e.target.value)}
              value={props.fontColor}
            />
            {/* <div className="col-2"></div> */}
          </div>

          <div className="row my-4 rounded-lg shadow-sm pt-2 pb-2 ">
            <div className="col">Choose background </div>
            <input
              type="color"
              className="col-6 rounded-full pt-1 pb-1 bg-white shadow-xl cursor-pointer"
              onChange={(e) => props.setBgColor(e.target.value)}
              value={props.bgColor}
            />
            {/* <div className="col-2"></div> */}
          </div>

          <div className="row my-4 rounded-lg shadow-sm pt-2 pb-2 ">
            <div className="col"> Font weight </div>
            <div className="col-8">
              <button
                className={
                  "btn mx-1 " +
                  (Number(props.fontWeight) == 400
                    ? "btn-info"
                    : "btn-outline-info")
                }
                onClick={(e) => props.setFontWeight(400)}
              >
                Normal
              </button>{" "}
              <button
                className={
                  "btn mx-1 " +
                  (Number(props.fontWeight) == 600
                    ? "btn-info"
                    : "btn-outline-info")
                }
                onClick={(e) => props.setFontWeight(600)}
              >
                Bold
              </button>
              <button
                className={
                  "btn mx-1 " +( props.fontFamily.includes("sans-serif")?
                  (Number(props.fontWeight) == 900
                    ? "btn-info"
                    : "btn-outline-info"):"disabled")
                }
                onClick={(e) => props.setFontWeight(900)}
              >
                Heavy
              </button>
            </div>
          </div>
          <div className="row my-4 rounded-lg shadow-sm pt-2 pb-2 ">
            <div className="col">Choose font-style</div>
            <select
              className="col bg-slate-300 rounded-md cursor-pointer"
              name="chooseStyle"
              onChange={(e) => props.setFontStyle(e.target.value)}
              value={props.fontStyle}
            >
              <option style={{ fontStyle: "normal" }} >normal</option>
              <option style={{ fontStyle: "italic" }}>italic</option>
              <option style={{ fontStyle: "oblique" }}>oblique</option>
            </select>
          </div>

          <div className="row my-4 rounded-lg shadow-sm pt-2 pb-2 ">
            <div className="col">Choose font-family</div>
            <select
              className="col bg-slate-300 rounded-md cursor-pointer"
              name="chooseFamily"
              onChange={(e) => props.setFontFamily(e.target.value)}
              value={props.fontFamily}
            >
              <option style={{ fontFamily: "sans-serif" }}>sans-serif</option>
              <option style={{ fontFamily: "serif" }}>serif</option>
              <option style={{ fontFamily: "monospace" }}>monospace</option>
              <option style={{ fontFamily: "cursive" }}>cursive</option>
              <option style={{ fontFamily: "fantasy" }}>fantasy</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default StyleBox;
