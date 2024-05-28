// import dummy from "../db/data.json";
// import {useState, useEffect} from "react";
//이후엔,dummy 대신, fetch 로 json data 사용->useState([]) 에 data 저장해서 사용.( 이때 useEffect 사용.)
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function DayList(){
    // fetch 로 데이터를 받아서, state에 저장.
    // const [days, setDays] = useState([]);
    // useEffect(()=>{
    //     fetch("http://localhost:3001/days")
    //     .then(res => {return res.json()}) //http응답을 json으로+프라미스반환
    //     .then(data => {setDays(data)})
    // },[]);
    // [빈배열] : 상태값과 무관하게 렌더링 직후, 한번만 실행.
    // 개발자도구:네트워크-Fetch-Preview 에서 확인
    const days = useFetch("http://localhost:3001/days");
    return (
<ul className="list_day">
    {days.map(day => (
    <li key={day.id}>
        <Link to={`/day/${day.day}`}>
        {day.day} 일
        </Link>
        </li>))}
</ul>
        
    )
}