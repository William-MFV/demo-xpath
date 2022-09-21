import React from "react";
import VirtualScroll from "react-dynamic-virtual-scroll";
import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
  const renderItem = React.useCallback((rowIndex) => {
    var fake_id = "item-" + rowIndex
    return (
      <div
        id= {fake_id}
        className="List-item"
        style={{
          height: 40 ,
          background: rowIndex % 2 ? "lightgray" : "white"
        }}
      >
        <h3>List item: {rowIndex}</h3>
      </div>
    );
  }, []);

  return (
    <VirtualScroll
      className="List"
      minItemHeight={40}
      totalLength={100}
      renderItem={renderItem}
      length={10}
      buffer={10}
    />
  );
}

export default App;
