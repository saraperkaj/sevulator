function App() {
  const createNums = () => {
    const nums = [];

    for (let i = 1; i < 10; i++) {
      nums.push(<button key={i}>{i}</button>);
    }

    return nums;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>

        <div className="operators">
          <button>/</button>
          <button>x</button>
          <button>+</button>
          <button>-</button>

          <button>DEL</button>
        </div>

        <div className="mainNums">{createNums()}</div>

        <div className="nums">
          <button>0</button>
          <button>.</button>
          <button>%</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
