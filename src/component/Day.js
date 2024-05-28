/* eslint-disable import/no-anonymous-default-export */
// import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from "./Word";
// import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

export default function(){
    // console.log(dummy.words);
    // words에 filter 걸기
    // const day = 3;
    //FIXME: App 라우팅 /day/:day - useParams().day
    // const a = useParams();
    // const day = a.day;
    // const day = useParams().day;
    const {day} = useParams();
    // const [words, setWords] = useState([]);

    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {return res.json();})
    //     .then(data => {setWords(data);});
    // },[day]);

// const wordList = words.filter(word => word.day===Number(day));
// filter 는 더미를 통으로 가져온 후, 날짜로 필터한 것. fetch로는 조건에 맞는 값만 가져올 수 있다.
const words = useFetch(`http://localhost:3001/words?day=${day}`);
    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word=>(
                   <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}