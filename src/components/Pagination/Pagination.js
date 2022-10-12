import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

const Pages = ({ setCurrentPage }) => {
  const [page, setPage] = useState(1);
  const [pages] = useState(9);

  function handleChange(event, value) {
    setPage(value);
    setCurrentPage(value);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      style={{ margin: "40px" }}
      className="w-94 flex justify-center items-center"
    >
      <Stack spacing={3}>
        <Pagination
          size="large"
          variant="outlined"
          shape="rounded"
          count={pages}
          page={page}
          onChange={handleChange}
          className="behavior-smooth"
        />
      </Stack>
    </div>
  );
};

export default Pages;
