import { Route, Switch } from "react-router";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import GymList from "./GymList";
import { useSelector } from "react-redux";
import GymDetail from "./GymDetail";
import GymForm from "./GymForm";
import ClassForm from "./ClassForm";
import TypeClassList from "./TypeClassList";
import ClassDetail from "./ClassDetail";
const Routes = () => {
  const gyms = useSelector((state) => state.gymReducer.gyms);
  const _classes = useSelector((state) => state.classReducer.classes);
  return (
     <Switch>

          <Route path="/gym/:gymId/class/new">
            <ClassForm />
          </Route>
          <Route path="/gym/:gymSlug">
            <GymDetail/>
          </Route>
          <Route path="/class/:classSlug">
            <ClassDetail/>
          </Route>
          <Route path="/create/gym">
           <GymForm/>
          </Route>
          <Route path="/typeclass">
            <TypeClassList/>
          </Route>
          <Route path="/class">
            <GymList _classes={_classes}/>
          </Route>
          <Route path="/gym">
            <GymList gyms={gyms}/>
          </Route>
          <Route path="/signup">
          <Signup />
          </Route>
          <Route path="/signin">
          <Signin />
          </Route>
          <Route path="/">
          <Home />
          </Route>

      </Switch>
    );
  };
  
  export default Routes;