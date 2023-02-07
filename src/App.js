import Cookies from "js-cookie";

function App() {
  // Method to set data in cookies which will expire in 7 days
  const SetCookie = () => {
    Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
      expires: 7,
    });
  };

  // Method to get data from cookies
  const GetCookie = () => {
    alert(Cookies.get("token"));
  };

  // Method to remove data from cookies
  const RemoveCookie = () => {
    Cookies.remove("token");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h6>1. Click on Set Cookie to set data in cookies</h6>
      <h6>2. Click on Get Cookie to display the data</h6>
      <h6>2. Click on Remove Cookie to remove data from cookies</h6>
      <button onClick={SetCookie}>Set Cookie</button>
      <button onClick={GetCookie}>Get Cookie</button>
      <button onClick={RemoveCookie}>Remove Cookie</button>
    </div>
  );
}

export default App;
