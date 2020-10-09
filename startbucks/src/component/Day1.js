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
    const handleRemove = (index) => {
        setState({
            names: names.filter((item, i) => i !== index),
            name: "",
        });
    };
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    const nameList2 = names.map((name, index) => (
        <li
            key={index}
            onDoubleClick={() => {
                handleRemove(index);
            }}
        >
            {name}
        </li>
    ));
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
                <div>
                    onDoubleClick이라는 이벤트를 사용해서 요소를 두번 클릭하면
                    사라지는 기능을 구현할 것이다.
                </div>
                <blockquote>
                    {`const nameList2 = names.map((name, index) => (
        <li
            key={index}
            onDoubleClick={() => {
                handleRemove(index);
            }}
        >
            {name}
        </li>
    ));`}
                </blockquote>
                <div>
                    이렇게 위에 랜더링 할때 handleRemove라는 함수에 key값인
                    index를 전달하면 몇번째 배열을 filtering할 것인지 전달할 수
                    있다.
                </div>
                <blockquote>{`
        const handleRemove = (index) => {
            setState({
                names: names.filter((item, i) => i !== index),
                name: "",
            });
        };`}</blockquote>
                <div>
                    다음은 handleRemove로직이다. index라는 값을 요구하며, 이
                    매서드가 실행하면 setState를 실행하는데 names배열의 값을
                    filtering할 filter라는 매서드를 실행한다.
                </div>
                <div>
                    filter함수는 callback함수를 요구하는데 item과 i를 받는다.
                    이때 item은 순회하는 배열의 인자값을 의미하며 index는 그
                    인자값의 인덱스를 의미한다.
                </div>
                <div>
                    <strong>
                        그래서 위 filter함수를 간단히 서술해보면 전달받은 삭제할
                        index값이 i랑 같을때 그 값을 거른 배열을 리턴한다는
                        의미이다.
                    </strong>
                </div>
                <div></div>
                <hr />

                <h3>완성본</h3>
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
            <div className="learning_box">
                <h4>
                    이렇게 스타벅스에서 배열을 렌더링하는 방법에 대해서 공부해
                    보았다. 사실 학교나 집에서는 분위기가 좋지못해서 공부하는데
                    방해가 되었지만 스타벅스에서 코딩을 해보니 확실히 공부가
                    잘되는 느낌이 있다.
                </h4>
                <h4>
                    앞으로 학교에서 집에 귀가하는 날에는 스타벅스에 출석하는
                    시간을 가져야 할 필요성이 있다고 생각했다.
                </h4>
                <h1>"너무 갬성이 좋다아~~"</h1>
            </div>
        </>
    );
}
export default Day1;
