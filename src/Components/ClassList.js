import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { List,ListWrapper } from "../styles";
import ClassItem from "./ClassItem";
import { useSelector } from "react-redux";
import { useState } from "react";

const ClassList = ({ _classes }) => {
  const user = useSelector((state) => state.authReducer.user);

  if (!user) return <Redirect to="/signin" />;

  const classList = _classes
    .map((_class) => <ClassItem key={_class.id} _class={_class} />);
  return (
    <>
      <Helmet>
        <title>Classes</title>
      </Helmet>

      <ListWrapper>{classList}</ListWrapper>
    </>
  );
};

export default ClassList;