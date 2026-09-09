import { useEffect, useState } from 'react';
import './exercise4.css';
import Navbar from './Navbar';
import ReactLogoPage from './ReactLogoPage';
import JsxDemo from './JsxDemo';
import { Rectangle, Triangle } from './shapes';
import { retailCompanies, getRandomNumber, results } from './es6';

const shapes = [new Rectangle('red', 4, 5), new Triangle('blue', 6, 3)];

function Exercise4() {
  const [randomResult, setRandomResult] = useState('Đang lấy số...');

  // Promise: số ngẫu nhiên lớn hơn 5, ngược lại hiện "Error"
  useEffect(() => {
    getRandomNumber()
      .then((number) => setRandomResult(`Số ngẫu nhiên: ${number}`))
      .catch((error) => setRandomResult(error.message));
  }, []);

  return (
    <div className="exercise4">
      <Navbar />
      <ReactLogoPage />
      <JsxDemo />

      {/* Công ty Retail, start đã tăng thêm 1, in ra DOM bằng thẻ p */}
      <div className="section">
        <h3>Công ty Retail (start + 1)</h3>
        {retailCompanies.map((company) => (
          <div className="company-row" key={company.name}>
            <p>{company.name}</p>
            <p>{company.category}</p>
            <p>{company.start}</p>
            <p>{company.end}</p>
          </div>
        ))}
      </div>

      {/* Class Shape - Rectangle - Triangle */}
      <div className="section">
        <h3>Class Shape - Rectangle - Triangle</h3>
        <ul className="result-list">
          {shapes.map((shape) => (
            <li key={shape.toString()}>
              {shape.toString()} - diện tích: {shape.getArea()}
            </li>
          ))}
        </ul>
      </div>

      {/* Kết quả các yêu cầu ES6 */}
      <div className="section">
        <h3>Kết quả ES6</h3>
        <ul className="result-list">
          {results.map(([label, value]) => (
            <li key={label}>
              <span className="label">{label}:</span> {value}
            </li>
          ))}
        </ul>
      </div>

      {/* Promise */}
      <div className="section">
        <h3>Promise</h3>
        <p>{randomResult}</p>
      </div>
    </div>
  );
}

export default Exercise4;
