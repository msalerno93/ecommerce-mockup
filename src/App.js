import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component"
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>i am the shop page</h1>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
