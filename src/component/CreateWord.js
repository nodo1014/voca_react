import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch"
// import { useHistory } from "react-router"; // 지원 종료
import { useNavigate } from "react-router-dom";



export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    // const history = useHistory(); // -->useNavigate();
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
    // 폼 제출시, 새로고침 안되게!
    function onSubmit(e) {
        e.preventDefault();
        // console.log(engRef.current.value); // 폼 값 사용하기.
        //fetch 로 저장(POST)
        if (!isLoading) {
            setIsLoading(true);
        fetch(`http://localhost:3001/words`,{
            method: "post",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                day :dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),
        }).then(res => {
            if (res.ok){
                alert("생성 완료");
                // history.push(`/day/${dayRef.current.value}`) // useNavigate -> push X
                history(`/day/${dayRef.current.value}`);
                setIsLoading(false);
            }
            });
        }

    }

//FIXME: useRef : 돔의 위치에 접근.
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);


    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>KOR</label>
                <input type="text" placeholder="computer" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                {/* <input type="radio" placeholder="computer"/> */}
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button
                style={{opacity: isLoading ? 0.3 : 1}}
            >{isLoading?"저장중..." : "저장"}</button>
        </form>
            )
}
