import { useState } from "react";
// 객체 복사 라이브러리
import produce from "immer";
import App from "./App";

export type TodoType = {
  uid: string;
  title: string;
  body: string;
  done: boolean;
  sticker: string;
  date: string;
};

const AppContainer = () => {
  // 상태데이터
  const initData: Array<TodoType> = [
    {
      uid: "1",
      title: "할일 1",
      body: "할일 내용 1",
      done: false,
      sticker: "1",
      date: "2023-02-27",
    },
    {
      uid: "2",
      title: "할일 2",
      body: "할일 내용 1",
      done: false,
      sticker: "1",
      date: "2023-02-27",
    },
    {
      uid: "3",
      title: "할일 3",
      body: "할일 내용 1",
      done: false,
      sticker: "1",
      date: "2023-02-27",
    },
    {
      uid: "4",
      title: "할일 4",
      body: "할일 내용 1",
      done: false,
      sticker: "1",
      date: "2023-02-27",
    },
  ];

  const [todoList, setTodoList] = useState(initData);
  // 추가기능
  const addTodo = (
    uid: string,
    title: string,
    body: string,
    date: string,
    sticker: string,
    done: boolean
  ) => {
    // 새로운 todoType 생성
    // 기존 todoList state 를 복사하고,
    // 추가 todoList 를 합쳐주고,
    // todoList state 를 업데이트한다.
    // 이때, immutable 을 유지한다.
    // 필수 라이브러리로 Immer 가 있다.
    // Immer 는 객체의 불변성을 유지하는 것으로
    // 업무에서 필수로 활용한다.
    // 즉, {...todoList, newTodo} 를 대신한다.
    let nweTodoList = produce(todoList, (draft) => {
      draft.push({
        uid: uid,
        title: title,
        body: body,
        date: date,
        sticker: sticker,
        done: false,
      });
    });
    // state 업데이트
    setTodoList(nweTodoList);
  };
  // 수정기능
  const updateTodo = (todo: TodoType) => {};
  // 삭제기능
  const deleteTodo = (todo: TodoType) => {};
  // 정렬기능
  const sortTodo = (sortType: string) => {};

  return (
    <App
      todoList={todoList}
      addTodo={addTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      sortTodo={sortTodo}
    />
  );
};

export default AppContainer;
