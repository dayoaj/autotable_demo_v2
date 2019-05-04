import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { green, yellow } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import Body from "./Body";
import ResponsiveNavBar from "./ResponsiveNavBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { BrowserRouter as Router } from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: yellow
  }
});
const useStyles = makeStyles({
  root: {
    zIndex: 1,
    overflow: "hidden",
    display: "flex",
    width: "100%",
    height: "100vh"
  },
  progress: {
    margin: "0 auto",
    alignSelf: "center",
    color: theme.secondary
  }
});

export default function App() {
  const classes = useStyles();
  const [mobOpen, setMobOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  const toggleOpenDrawer = () => {
    setMobOpen(!mobOpen);
  };

  if (isLoading) {
    console.log(hasError);
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CircularProgress className={classes.progress} color="secondary" />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Router>
        <ResponsiveNavBar
          mobOpen={mobOpen}
          toggleOpenDrawer={toggleOpenDrawer}
        />
        {/* {hasError ? (
        <div>Something went wrong</div>
      ) : ( */}
        <Body toggleOpenDrawer={toggleOpenDrawer} data={data} />
        {/* )} */}
        </Router>
      </div>
    </ThemeProvider>
  );
}
