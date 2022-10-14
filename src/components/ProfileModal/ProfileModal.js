import * as React from "react";
import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
  overflow: "auto",
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { modalData } = React.useContext(appContext);

  return (
    <div className="flex flex-col justify-center items-center max-w-[100vw] min-h-[54vh]">
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
            <div className="w-12/12 ">
              <tabel>
                <tr>
                  <th className="w-60">Rank</th>
                  <th className="w-60">Name</th>
                  <th className="w-60">Price</th>
                  <th className="w-60">marketCap</th>
                  <th className="w-60">Check</th>
                  <th className="w-60">Amount</th>
                </tr>
                {modalData.map((el) => (
                  <tr>
                    <td className="w-60 h-24">{el.rank}</td>
                    <td className="w-60 h-24">
                      <img src={el.iconUrl} width={40} alt="symbol" />
                      {el.name}
                    </td>
                    <td className="w-60 h-24">{el.price}</td>
                    <td className="w-60 h-24">{el.marketCap}</td>
                    <td className="w-60 h-24">Check</td>
                    <td className="w-60 h-24">Amount</td>
                  </tr>
                ))}
              </tabel>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
