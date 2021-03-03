import { TextField } from "@material-ui/core";

const Filter = ({ filterState, filterChange }) => {
  return (
    <TextField
      id="outlined-name"
      value={filterState}
      onChange={filterChange}
      variant="outlined"
      label="products"
    />
  );
};
export default Filter;
