import logo from '../logo.svg';

// Yêu cầu: thiết kế trang web giống ảnh trong đề
function ReactLogoPage() {
  return (
    <div className="react-page">
      <img src={logo} alt="React logo" />
      <hr />
      <p className="logo-title">This is the React logo!</p>
      <p className="logo-note">(I don't know why it is here either)</p>
      <p>The library for web and native user interfaces</p>
    </div>
  );
}

export default ReactLogoPage;
