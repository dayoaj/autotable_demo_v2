import React, { useState, useEffect } from "react";
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
  
  useEffect(() => {
    setIsLoading(true);
    fetch('http://127.0.0.1:8090/api/user',{
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    })
      .then(response =>{
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => {
        setData(data.rows);
        setIsLoading(false);
      })
      .catch(error => this.setState({ error, isLoading: false}));
  }, []);

  const toggleOpenDrawer = mobOpen => {
    setMobOpen(!mobOpen);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <MyFragment>
      <CssBaseline />
      <ResponsiveNavBar
        mobOpen={mobOpen}
        toggleOpenDrawer={toggleOpenDrawer}
      />
      <Body toggleOpenDrawer={toggleOpenDrawer} data={data} />
    </MyFragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
