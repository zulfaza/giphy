import { Button, FormControl, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <form style={{ marginBottom: "20px" }} onSubmit={handleSubmit}>
      <FormControl>
        <TextField onChange={handleChange} label="Keyword" variant="outlined" />
        <Button variant="contained" color="primary" type="input">
          search
        </Button>
      </FormControl>
    </form>
  );
};

export default SearchBar;
