import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/hello");
        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMessage();
  }, []);
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
