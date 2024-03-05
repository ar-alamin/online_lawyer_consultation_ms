import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Lawyer from "../pages/Lawyer";
import User from "../pages/User";
import New from "../pages/New";
import { lawyerInputs, userInputs } from "../assets/data/formsource";
import Login from "../pages/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />

        <Route path="users">
          <Route index element={<User />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
        </Route>

        <Route path="lawyers">
          <Route index element={<Lawyer />} />
          <Route
            path="new"
            element={<New inputs={lawyerInputs} title="Add New Lawyer" />}
          />
        </Route>

        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Routers;
