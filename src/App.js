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
      Hello, World!
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>

        <div className="operators">
          <buton>/</buton>
          <buton>*</buton>
          <buton>+</buton>
          <buton>-</buton>

          <buton>DEL</buton>
        </div>

        <div className="nums">
          {createNums()}
          <buton>0</buton>
          <buton>.</buton>
          <buton>=</buton>
        </div>
      </div>
    </div>
  );
}

export default App;
