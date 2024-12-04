import { Provider } from "react-redux"
import { store } from "./store"
import AttemptsCounter from "./AttemptsCounter"

const App = () => (
  <Provider store={store}>
    <AttemptsCounter />
  </Provider>
)

export default App
