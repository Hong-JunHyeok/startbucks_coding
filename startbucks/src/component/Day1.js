import React, { useState } from "react";

function Day1() {
    const arr = ["에어팟", "아이폰", "맥북"];
    const arrList = arr.map((obj) => <li>{obj}</li>);
    const arrList_nonError_ver = arr.map((obj, index) => (
        <li key={index}>{obj}</li>
    ));

    const [state, setState] = useState({
        names: ["에어팟", "아이폰", "맥북"],
        name: "",
    });
    const { names, name } = state;
    const handleChange = (e) => {
        setState({ ...state, name: e.target.value });
        console.log(state.name);
    };

    const handleInsert = () => {
        console.log(state.names);
        setState({
            names: names.concat(name),
            name: "",
        });
    };
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    const nameList2 = names.map((name, index) => <li key={index}>{name}</li>);
    return (
        <>
            <h1>day_1 - 배움point(배열의 렌더링)</h1>
            <div className="learning_box">
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
            </div>
            <div className="learning_box">
                <h1>위의 방법대로 했을때에 console창 오류 해결</h1>
                <h3>오류의 원인 : 랜더링할때 key값이 없기 때문</h3>
                <ul>{arrList_nonError_ver}</ul>
                <blockquote>
                    {`
                    const arrList_nonError_ver = arr.map((obj, index) => (
                    <li key={index}>{obj}</li>
                    ));`}
                </blockquote>
                <strong>
                    위의 방법대로 map에서 key를 전달해주는 방법을 사용했다.
                </strong>
            </div>
            <div className="learning_box">
                <h1>
                    concat 함수를 이용하여 배열에 데이터를 추가하는 기능을
                    구현해보겠다.
                </h1>
                <h3>
                    state는 언제나 setState를 이용하여 변경해야 하고, 직접
                    접근하여 수정하면 안된다.
                    <i>
                        (즉 기존 배열을 직접 수정하지 않고 기존 배열 + 새 값을
                        합친 새로운 배열을 생성하는 방법을 사용하여야 함)
                    </i>
                </h3>
                <blockquote>
                    {`
                const [state, setState] = useState({
                names: ["에어팟", "아이폰", "맥북"],
                });
          `}
                </blockquote>
                <div>먼저 useState hooks를 사용하여 state를 만들어주었다</div>
                <blockquote>
                    <input type="text" className="" />
                    <input type="button" value="추가" />
                    {<ul>{arrList_nonError_ver}</ul>}
                </blockquote>
                <div>그다음 html에 이런식으로 폼을 작성해 주겠다.</div>
                <div>
                    이제 기존 배열과 새로운 값을 합쳐서 새로운 배열을 만들어주는
                    concat이라는 함수를 사용해서 로직을 짜보았다
                </div>
                <blockquote>
                    {`const [state, setState] = useState({
        names: ["에어팟", "아이폰", "맥북"],
        name: "",
    });
    const { names, name } = state;
    const handleChange = (e) => {
        setState({ ...state, name: e.target.value });
        console.log(state.name);
    };

    const handleInsert = () => {
        console.log(state.names);
        setState({
            names: names.concat(name),
            name: "",
        });
    };
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);`}
                </blockquote>
                <div>위의 로직대로 nameList를 랜더링 해보면</div>
                <blockquote>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={state.name}
                    />
                    <input type="button" value="추가" onClick={handleInsert} />
                    {<ul>{nameList}</ul>}
                </blockquote>
                <div>정상적으로 값이 추가되는것을 알 수 있다.</div>
            </div>
            <div className="learning_box">
                <h1>
                    이제 filter함수를 사용해서 데이터 삭제 기능을 구현해보도록
                    하겠다.
                </h1>
                <h3>
                    데이터를 삭제할때도 배열의 불변성을 지켜가주면서 해야한다.
                </h3>
                <div>
                    먼저 기존의 코드를 복사해서 그대로 따오겠다.
                    <del>추가하면 위에도 추가되는건 비밀</del>
                </div>
                <blockquote>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={state.name}
                    />
                    <input type="button" value="추가" onClick={handleInsert} />
                    <ul>{nameList2}</ul>
                </blockquote>
            </div>
        </>
    );
}
export default Day1;
