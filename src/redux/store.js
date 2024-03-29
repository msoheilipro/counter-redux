import { createStore} from "redux";
import rootReducer from "./reducers";
const reduxDevTool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer,reduxDevTool);

export default store;
