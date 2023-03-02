import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component"
import { Routes, Route } from "react-router-dom";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
