import WrapperCard from "./card";
function App() {
  return (
    <div style={{ display: "flex" }}>
      <WrapperCard>
        <h1>Hi, there!</h1>
      </WrapperCard>

      <WrapperCard>
        <h1>Hello from Card 2</h1>
      </WrapperCard>
    </div>
  );
}

export default App;
