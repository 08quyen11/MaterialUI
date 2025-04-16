import Navbar from "./layout/Navbar";
import { Home } from "./pages/Home";
import UserSearch from "./components/UserSearch"; // Thêm dòng này

function App() {
  return (
    <>
      <Navbar />
      {/* Nội dung trang chính */}
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <UserSearch /> {/* Hiển thị thanh tìm kiếm và kết quả */}
        <Home />
      </div>
    </>
  );
}

export default App;
