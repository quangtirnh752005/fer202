import { useState } from 'react';
import './App.css';
import Exercise4 from './exercise4/Exercise4';
import StudentDemo from './StudentDemo';

function App() {
  const [tab, setTab] = useState('student');

  return (
    <div>
      <div className="tab-bar">
        <button onClick={() => setTab('student')}>Quản lý sinh viên</button>
        <button onClick={() => setTab('exercise4')}>Exercise 4</button>
      </div>
      {tab === 'student' ? <StudentDemo /> : <Exercise4 />}
    </div>
  );
}

export default App;
