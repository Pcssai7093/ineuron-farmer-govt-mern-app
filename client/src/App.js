import UserRegister from "./components/UserRegister";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import UserHome from "./components/UserHome";
import CropsAdminUI from "./components/CropsAdminUI";
import SchemesAdminUI from "./components/SchemesAdminUI";
import CropsUserUI from "./components/CropsUserUI";
import SchemesUserUI from "./components/SchemesUserUI";
import UserNavbar from "./components/UserNavbar";
import ApplicationUserUI from "./components/ApplicationUserUI";
import AdminNavbar from "./components/AdminNavbar";
import ApplicationsAdminUI from "./components/ApplicationsAdminUI";
import UserLandingPage from "./components/UserLandingPage";

// import userRegister from "./components/UserRegister";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <UserLandingPage />
          </Route>
          <Route exact path="/user/reg">
            <UserRegister />
          </Route>
          <Route exact path="/regSuccess">
            registration successful
            <br />
            <Link to="/login">Click here to Login</Link>
          </Route>
          <Route exact path="/user/login">
            <UserLogin />
          </Route>
          <Route exact path="/user/home/:userId">
            <UserNavbar />
            <UserHome />
          </Route>
          <Route exact path="/user/crops/:userId">
            <UserNavbar />
            <CropsUserUI />
          </Route>
          <Route exact path="/user/schemes/:userId">
            <UserNavbar />
            <SchemesUserUI />
          </Route>
          <Route exact path="/user/application/:userId">
            <UserNavbar />
            <ApplicationUserUI />
          </Route>
          <Route exact path="/admin/login">
            <AdminLogin />
          </Route>
          <Route exact path="/admin/home/:adminId">
            <AdminNavbar />
            <AdminHome />
          </Route>
          <Route exact path="/admin/schemes/:adminId">
            <AdminNavbar />
            <SchemesAdminUI />
          </Route>
          <Route exact path="/admin/crops/:adminId">
            <AdminNavbar />
            <CropsAdminUI />
          </Route>
          <Route exact path="/admin/applications/:adminId">
            <AdminNavbar />
            <ApplicationsAdminUI />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
