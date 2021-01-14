import './App.css';
import React from "react";
import SignIn from "./signin";

function App() {
    const user = null;
  return (
      <SignIn path = "/" />
      // user ?
      //   <ProfilePage />
      //   :
      //     <Router>
      //         <SignUp path ="signup" />
      //         <SignIn opath ="/"/>
      //     </Router>
  );
}

export default App;
