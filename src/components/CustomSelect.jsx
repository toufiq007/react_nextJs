/* eslint-disable react/prop-types */
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function CustomSelect({ field }) {
  const [role, setRole] = React.useState("");
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={role}
        // label="role"
        onChange={handleChange}
        {...field}
        size="small"
        className="w-[150px]"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="businessmen">Businessmen</MenuItem>
        <MenuItem value="serviceHolder">Service Holder</MenuItem>
      </Select>
    </>
  );
}
