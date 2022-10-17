import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { appContext } from "../../common/context";
import CardCoin from "../CardCoin/CardCoin";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { modalData } = React.useContext(appContext);
  const coinData = modalData;
  console.log(modalData);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <div>
              {coinData.map((el) => (
                <CardCoin
                  uuid={el.uuid}
                  rank={el.rank}
                  iconUrl={el.iconUrl}
                  name={el.name}
                  price={el.price}
                  hVolume={el["24hVolume"]}
                  marketCap={el.marketCap}
                  sparkline={el.sparkline.map((el) => el)}
                  coinData={el}
                />
              ))}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
