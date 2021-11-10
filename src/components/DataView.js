import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";

const DataView = ({ arr }) => {
  console.log(arr);
  const [checked, setChecked] = useState(true);
  const [id, setId] = useState(null);
  const textColor = "#fff";

  if (arr.length < 1) {
    return null;
  }

  const title = arr[0].title.substring(0, 3);
  return (
    <>
      <div style={{ height: "1px" }} />
      <div
        className="tagName"
        style={{ backgroundColor: "#111", color: textColor, padding: "5px" }}
      >
        {title}
      </div>
      <TableContainer component={Paper} style={{ borderRadius: "0" }}>
        <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
          <TableBody>
            {arr.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{ backgroundColor: id === row.id ? "#222" : "#111" }}
              >
                <TableCell
                  style={{ color: textColor, borderBottom: "none" }}
                  component="th"
                  scope="row"
                >
                  {row.title}
                </TableCell>
                <TableCell
                  style={{ color: textColor, borderBottom: "none" }}
                  align="right"
                >
                  {row.num1}
                </TableCell>
                <TableCell
                  style={{
                    color: row.num2.startsWith("-") ? "red" : "green",
                    borderBottom: "none",
                  }}
                  align="right"
                >
                  {row.num2}
                </TableCell>
                <TableCell
                  style={{ color: textColor, borderBottom: "none" }}
                  align="right"
                >
                  {row.num3}
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
                  <Checkbox
                    style={{
                      padding: "0",
                      pointerEvents: !checked && id !== row.id ? "none" : null,
                    }}
                    icon={<StarIcon style={{ color: "#777" }} />}
                    checkedIcon={<StarIcon style={{ color: "#ffbb00" }} />}
                    onChange={() => {
                      setChecked(!checked);
                      checked ? setId(row.id) : setId(null);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataView;
