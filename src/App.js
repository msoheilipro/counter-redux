import { connect } from "react-redux";
import {
  plusCounter,
  minusCounter,
  resetCounter,
} from "./redux/actions/counterActions";
import "./App.css";

function App({ number, increase, decrease, reset }) {
  return (
    <div className="App">
      <h1>Count:{number}</h1> 
      {" "}
      <button onClick={decrease}>-</button>
      {" "}
      <button onClick={increase}>+</button>
      {" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    number: state.count.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(plusCounter()),
    decrease: () => dispatch(minusCounter()),
    reset: () => dispatch(resetCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
