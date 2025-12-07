function WrapperCard({ children }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      {children}
    </div>
  );
}
export default WrapperCard;
