// Yêu cầu: hiển thị đoạn chữ và danh sách khoá học bằng JSX
const courses = ['React', 'ReactNative', 'NodeJs'];

function JsxDemo() {
  return (
    <div className="section">
      {/* Display this text */}
      <h1 className="jsx-blue">This is JSX</h1>
      <h1>
        Hello <span className="jsx-blue">React</span>
      </h1>

      {/* Display list of course */}
      <h2>Course names</h2>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default JsxDemo;
