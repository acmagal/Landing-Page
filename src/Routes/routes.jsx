import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePF from "./HomePF";
import HomeParceiro from "./HomeParceiro";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} Component={HomePF} />
        <Route path={"/HomeParceiro"} Component={HomeParceiro} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
