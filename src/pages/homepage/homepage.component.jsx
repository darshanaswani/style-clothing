import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = (props) => {
  return (
    <div className="homepage">
      {console.log(props)}
      <Directory />
    </div>
  );
};

export default HomePage;
