import React from "react";

import "./App.css";

function App() {
    const arr = ["에어팟", "아이폰", "맥북"];
    const arrList = arr.map((obj) => <li>{obj}</li>);
    return (
        <>
            <h1>첫번째 방법(직접 html태그를 작성)</h1>
            <h3>하지만 유동적인 표현은 불가능</h3>
            <ul>
                <li>에어팟</li>
                <li>아이폰</li>
                <li>맥북</li>
            </ul>
            <hr />
            <h1>두번째 방법(JavaScript의 map함수를 사용하여 랜더링)</h1>
            <h3>유동적인 데이터 처리가 가능</h3>
            <ul>{arrList}</ul>
        </>
    );
}

export default App;
