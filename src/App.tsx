import Questions from "./components/Questions";
import background from "./assets/v3.jpg";
import ScrollMotion from "./components/ScrollMotion";
import ipigreet from "./assets/ipigreet.jpg";

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
      <div style={{ marginTop: "8vh" }}>
        <img
          style={{
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
          }}
          src={ipigreet}
          alt="no image"
        />
      </div>
      <ScrollMotion />
      <Questions />
    </div>
  );
}

export default App;
