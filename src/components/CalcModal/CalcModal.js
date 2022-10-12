import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CalcModal(props) {
  const { coinData } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [coinValue, setCoinValue] = useState(0);
  const onChange = (value) => {
    setCoinValue(value);
  };

  let calculate = (coinValue * coinData.price).toFixed(2);
  console.log(coinValue);
  console.log(calculate);

  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <CalculateIcon />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography>
              <div className="flex justify-center items-center">
                <h1>{coinData?.name}</h1>
                <img
                  className="ml-3"
                  src={coinData?.iconUrl}
                  alt={"logo"}
                  width={22}
                />
              </div>
            </Typography>
            <hr />
            <div className="flex justify-start items-center">
              <input
                type={"number"}
                className="  p-5 pl-10  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 mt-3 z-40"
                onChange={(e) => onChange(e.target.value)}
                defaultValue={coinValue}
              />
              <h2 className="ml-5 text-xl">x</h2>
              <h2 className="ml-3 font-bold">
                ${Number(coinData?.price).toLocaleString()}
              </h2>
              <h2 className="ml-3">=</h2>
              <h2 className="ml-3 font-bold">
                ${Number(calculate).toLocaleString()}
              </h2>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

{
  /* <h1>{coinData[0]?.price}</h1> */
}
