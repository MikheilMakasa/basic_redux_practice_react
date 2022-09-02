import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

// importing for redux
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  // Conditionally rendering the 'Auth' and 'UserProfile' components
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isLoggedIn && <UserProfile />}
      {!isLoggedIn && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
