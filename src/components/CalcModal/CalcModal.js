import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CalculateIcon from "@mui/icons-material/Calculate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 590,
  bgcolor: "background.paper",
  border: "2px solid ##009eec",
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

  return (
    <div>
      <Button onClick={handleOpen}>
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
            <Button onClick={handleClose} size="small" className="left-[460px]">
              x
            </Button>

            <Typography>
              <div className="flex justify-center items-center mb-4">
                <h1 className="pb-3">{coinData?.name}</h1>
                <img
                  className="ml-3 pb-3"
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
                className="p-5    text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 mt-3 z-40"
                onChange={(e) => onChange(e.target.value)}
                value={coinValue}
              />

              <h2 className="ml-5 mr-2  text-xl">x</h2>
              <input
                className="w-36 p-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-5 mt-3 z-40"
                readOnly
                value={`$${Number(coinData?.price).toLocaleString()}`}
              />
              {/* <h2 className="ml-3 font-bold">
                ${Number(coinData?.price).toLocaleString()}
              </h2> */}
              <h2 className="ml-3">=</h2>
              <input
                className="w-25 h-10 mt-2 ml-2 pl-1 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                readOnly
                value={`$ ${Number(calculate).toLocaleString()}`}
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
