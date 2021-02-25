import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { List,ListWrapper } from "../styles";
import ClassItem from "./ClassItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "./SearchBar";

const TypeClassList = () => {
  const user = useSelector((state) => state.authReducer.user);
  const [_query, _setQuery] = useState("");
  const _classes = useSelector((state) => state.classReducer.classes);
  const [query, setQuery] = useState("");

  if (!user) return <Redirect to="/signin" />;
  const handleChange = (event) => {
    setQuery(event.target.value  );
  };
  

  const classList = _classes
  .filter((_class) =>
  _class.type.includes(query)
   )
   .filter((_class) => _class.name.toLowerCase().includes(query))
    .map((_class) => <ClassItem key={_class.id} _class={_class} />);
  return (
    <>
      <select
          className="form-select mx-auto"
          aria-label="Default select example"
          name="type"
          onChange={handleChange}
        >
          <option value="" selected>
            Select type
          </option>
          <option value="YOGA">YOGA</option>
          <option value="FULL BODY FUSION">FULL BODY FUSION</option>
          <option value="CIRCUIT TRAINING">CIRCUIT TRAINING</option>
          
        </select>
        
         <SearchBar setQuery={_setQuery}/>
        <ListWrapper>{classList}</ListWrapper>
      
    </>
  );
};

export default TypeClassList;