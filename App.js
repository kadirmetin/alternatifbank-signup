import { Provider } from "react-redux";
import { store } from "./src/App/store";
import SignupScreen from "./src/features/signup/SignupScreen"

export default function App() {
  return (
    <Provider store={store}>
      <SignupScreen />
    </Provider>
  );
}
