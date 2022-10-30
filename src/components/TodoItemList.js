import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const { todos, onToggle, onRemove } = this.props;       // 이건 클래스 형식이라서 props가 이미 있음 그래서 this.props로 받는거임
        const todoList = todos.map(
            ({id, text, checked}) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}        // map으로 return을 할 때는 key(식별자)를 넣어 줘야한다.
            />
            )
        );
        const arr = [
            <h1>test1</h1>,
            <h1>test2</h1>
        ]
        return (
        <div>
            {todoList}
            {/* {arr.map(e=>{
                debugger
                return e;
            })}    */}
        </div>
        );
    }
}

export default TodoItemList;

// todos: todo 객체들이 들어있는 배열
// onToggle: 체크박스를 키고 끄는 함수
// onRemove: 아이템을 삭제시키는 함수