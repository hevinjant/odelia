import Questions from "./components/Questions";
import background from "./assets/v3.jpg";
import ScrollMotion from "./components/ScrollMotion";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "auto",
        backgroundImage: `url(${background})`,
      }}
    >
      <ScrollMotion />
      <Questions />
    </div>
  );
}

export default App;
