import { useEffect, useState } from 'react';
import Student from './Student';

// Yêu cầu 3: Rest Parameter
function createScores(...scores) {
  return scores;
}

const student = new Student('Trịnh Phú Quang', 21, createScores(8, 9, 10));

// Yêu cầu 4: Destructuring
const { name, age } = student;

// Yêu cầu 5: Spread - gộp thêm điểm mới
student.updScores([7, 8]);

function StudentDemo() {
  const [result, setResult] = useState('Đang đánh giá...');

  // Yêu cầu 7: Promise
  useEffect(() => {
    student.evaluate().then(setResult);
  }, []);

  return (
    <div className="App">
      <h2>Quản lý sinh viên</h2>
      <p>
        {name} - {age} tuổi
      </p>
      <p>Điểm: {student.scoresData().join(', ')}</p>
      <p>Điểm đạt: {student.passScores().join(', ')}</p>
      <p>Điểm trung bình: {student.avgScore().toFixed(2)}</p>
      <p>Đánh giá: {result}</p>
    </div>
  );
}

export default StudentDemo;
