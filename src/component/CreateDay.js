import { useState } from "react";
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";
// 기존 날짜수를 보여준다.
export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate("");
    const [isLoading, setIsLoading] = useState(false);

    function addDay() {
        fetch("http://localhost:3001/days", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length+1
            }),
        })
        .then(res=>{
            if (res.ok) {
                alert("생성 완료");
                history('/');
            }
        })
    }


    return (
        <div>
            <h3>현재 일수 : {days.length} </h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}