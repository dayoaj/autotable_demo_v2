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
  const [hasError, setHasError] = useState(false);
  // const [token, setToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await fetch("http://127.0.0.1:8090/api/user", {
          headers: {
            "Content-Type": "application/json"
            // "x-access-token": token,
          }
        });

        if (response.ok) {
          setData(response.json().rows);
          setIsLoading(false);
        } else {
          throw new Error("Error reading Data");
        }
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchData();
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
      <ResponsiveNavBar mobOpen={mobOpen} toggleOpenDrawer={toggleOpenDrawer} />
      {hasError ? (
        <div>Something went wrong</div>
      ) : (
        <Body toggleOpenDrawer={toggleOpenDrawer} data={data} />
      )}
    </MyFragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
