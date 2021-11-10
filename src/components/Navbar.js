import React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ dispatch }) => {
  const bgc = "#3a5fb5";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: "#111", paddingBottom: "45px" }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Button
                sx={{ width: "120px" }}
                style={{ backgroundColor: bgc, marginRight: "4px" }}
                onClick={() => {
                  dispatch({ type: "ALL" });
                  dispatch({ type: "XRP" });
                }}
              >
                XRP
              </Button>
              <Button
                sx={{ width: "120px" }}
                style={{ backgroundColor: bgc, marginRight: "4px" }}
                onClick={() => {
                  dispatch({ type: "ALL" });
                  dispatch({ type: "BCH" });
                }}
              >
                BCH
              </Button>
              <Button
                sx={{ width: "120px" }}
                style={{ backgroundColor: bgc }}
                onClick={() => {
                  dispatch({ type: "ALL" });
                  dispatch({ type: "LTC" });
                }}
              >
                LTC
              </Button>
              <InputBase
                style={{
                  paddingLeft: "10px",
                  backgroundColor: bgc,
                  width: "225px",
                  height: "40px",
                  position: "absolute",
                  top: "160%",
                  left: "25.8%",
                  transform: "translate(-50%, -50%)",
                }}
                sx={{ ml: 1, flex: 1, input: { color: "#fff" } }}
                placeholder="search all markets"
              />
              <IconButton
                type="button"
                sx={{ p: "8px" }}
                aria-label="close"
                style={{
                  backgroundColor: bgc,
                  position: "relative",
                  top: "44px",
                  left: "-185px",
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            </ButtonGroup>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapState = (state) => {
  return state;
};

export default connect(mapState)(Navbar);
