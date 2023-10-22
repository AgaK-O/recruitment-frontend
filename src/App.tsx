import React from 'react';
import './App.scss';
import { TodoList } from './components/todo-list/todo-list';
import { AddItem } from './components/add-item/add-item';
import { PageLayout } from './components/layout/page-layout';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <AddItem />
        <TodoList />
      </PageLayout>
    </div>
  );
}

export default App;
