const App = () => {
  const callApi = async () => {
    const res = await fetch(`/api/hello`);
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="text-center mt-auto">
      <h1>Docker App 🚀</h1>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
      >
        Call Api In Dev
      </button>
    </div>
  );
};

export default App;
