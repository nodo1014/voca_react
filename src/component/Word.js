import { useState } from "react";

// 뜻 보여주기: onClick, useState(false) , isShow
// 완료: 체크박스 onChange, useState(더미값), isDone
// npm install -g json-server
// json-server --watch ./src/db/data.json --port 3001
function Word({word:w}) {
    //Day컴포에서 props.word 전달
    const [isShow, setIsShow] = useState(false);
    const [word, setWord] = useState(w);
    const [isDone, setIsDone] = useState(word.isDone);
    // 삭제 후, 다시 그려주기 위해, word 스테이트로 저장
    function toggleShow () {
        setIsShow(!isShow);
    }
    function toggleDone () {
    // setIsDone(!isDone);
 // isDone 값을 서버에 반영하기 위해, fetch+put
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if (window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    setWord({id: 0});
                }
                });
        }
    }
//FIXME: 삭제 후, word.id 가 0 이면 null 리턴.(그리지 않음)
    if (word.id === 0) {
        return null;
    }
    

    return (
     
        <tr className={isDone ? "off":""}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone}></input></td>
            <td>{word.eng}</td>
            <td>{isShow?word.kor:""}</td>
            <td><button onClick={toggleShow}>뜻 {isShow?"숨기기":"보기"}</button><button onClick={del} class="btn_del">삭제</button></td>
        </tr>


    )
}

export default Word;