const App = () => {
  const callApi = async () => {
    const res = await fetch(`/api/hello`);
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div>
      <h1>Docker App 🚀</h1>
      <button onClick={callApi}>Call Backend</button>
    </div>
  );
};

export default App;
