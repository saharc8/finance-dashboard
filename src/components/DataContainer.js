import React from "react";
import { connect } from "react-redux";
import DataView from "./DataView";

const DataContainer = ({ data = [] }) => {
  console.log(data);

  const dataXRP = data.filter((obj) => {
    if (obj.title.startsWith("XRP")) {
      return obj;
    }
    return null;
  });

  const dataBCH = data.filter((obj) => {
    if (obj.title.startsWith("BCH")) {
      return obj;
    }
    return null;
  });

  const dataLTC = data.filter((obj) => {
    if (obj.title.startsWith("LTC")) {
      return obj;
    }
    return null;
  });

  data = [dataXRP, dataBCH, dataLTC];
  console.log(data);

  return (
    <div>
      {data.map((obj, index) => {
        return <DataView arr={obj} key={index} />;
      })}
    </div>
  );
};

const mapState = (state) => {
  const { data } = state;
  return { data };
};

export default connect(mapState)(DataContainer);
