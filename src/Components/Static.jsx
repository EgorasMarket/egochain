import React from "react";
import NumberFormat from "react-number-format";

export const numberWithCommas = (x) => {
  return <NumberFormat value={x} displayType="text" thousandSeparator={true} />;
};
