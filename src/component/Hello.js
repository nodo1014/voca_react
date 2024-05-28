import style from "./Hello.module.css";

export default function Hello() {
    return (
<div>

    <h1 style={
        {
            // color: "#f00",
            borderLeft: "10px solid #000",
            marginBottom: "50px",
            marginLeft: "10px",
            opacity: 1,
        }
    }>Hello</h1>
    <div className={style.box}>{style.box}</div>
</div>
);
}