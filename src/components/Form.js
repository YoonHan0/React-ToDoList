import React from 'react';
import './Form.css';

const Form = ({
    value, 
    onChange, 
    onCreate, 
    onKeyPress
}) => {     
    {/*(props) = ({value, onChange, onCreate, onKeyPress})*/}   {/*구조 분행 할당이라는 개념 : */}
    // const value = props.value;
    // const onChange = props.onChange;
    // const onCreate = props.onCreate;
    // const onKeyPress = props.onKeyPress;     
    //위의 4줄을 하나로 변경할 수 있다. => // const {value, onChange, onCreate, onKeyPress} = props;
    
    return (
        <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <div className="create-button" onClick={onCreate}>
            추가
        </div>
        </div>
    );
};

export default Form;