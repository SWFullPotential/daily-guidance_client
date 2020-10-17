import React from "react";
import NavBar from "./NavBar";
import Box from "@material-ui/core/Box";

const Home = () => {
  return (
    <Box bgcolor="#221266" p={1}>
      <div>
        <NavBar />
        <Box display="flex" color="white">
          <div>
            <h1>Home</h1>
            <p>Please log in for your daily draw.</p>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Home;
