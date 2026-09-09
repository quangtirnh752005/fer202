// Yêu cầu: tạo navbar bằng JSX
function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a className="active" href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#search">Search</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a className="login" href="#login">
          Login
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
