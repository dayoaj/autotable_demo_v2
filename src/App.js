import React, { useState, useEffect } from "react";
import { ThemeProvider, makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Body from "./Body";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { green, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    zIndex: 1,
    overflow: "hidden",
    display: "flex",
    width: "100%"
  }
});

function App() {
  const classes = useStyles();
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
    <ThemeProvider
      theme={{
        palette: {
          primary: green,
          secondary: yellow
        }
      }}
    >
      <div className={classes.root}>
        <CssBaseline />
        <ResponsiveNavBar
          mobOpen={mobOpen}
          toggleOpenDrawer={toggleOpenDrawer}
        />
        {hasError ? (
          <div>Something went wrong</div>
        ) : (
          <Body toggleOpenDrawer={toggleOpenDrawer} data={data} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
