import React, { useState } from "react";
import { styled } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import Body from "./Body";
import ResponsiveNavBar from "./ResponsiveNavBar";

const MyFragment = styled(React.Fragment)({
  zIndex: 1,
  overflow: "hidden",
  display: "flex",
  width: "100%"
});

function App() {
  const [mobOpen, setMobOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const toggleOpenDrawer = mobOpen => {
    setMobOpen(!mobOpen);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (nb 
    <React.Fragment>
      <CssBaseline />
      <ResponsiveNavBar
        mobOpen={mobOpen}
        toggleOpenDrawer={toggleOpenDrawer}
      />
      <Body toggleOpenDrawer={toggleOpenDrawer} data={data} />
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
