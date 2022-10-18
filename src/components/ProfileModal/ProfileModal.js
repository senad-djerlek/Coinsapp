import { useContext, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { appContext } from "../../common/context";
import ModalCard from "../ModalCard/ModalCard";

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
  const { modalData, profileCoin, addToProfileList, profileList } =
    useContext(appContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col justify-center items-center max-w-[100vw]">
      {profileList.length === 0 ? (
        <div>
          <Button onClick={handleOpen}>CRYPTO WALLET</Button>
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
                <div className="w-12/12">
                  <div className="flex h-10 -mt-10 mb-10 font-bold">
                    <div className="w-20 h-24  flex justify-center items-center">
                      <div>Rank</div>
                    </div>
                    <div className="w-60 h-24  flex flex-col justify-center items-center">
                      <h1>Name</h1>
                      <hr />
                    </div>
                    <div className="w-60 h-24  flex justify-center items-center">
                      <h1 className="">Price</h1>
                    </div>
                    <div className="w-60 h-24  flex justify-center items-center">
                      <h1 className="flex justify-center items-center">
                        MarketCap
                      </h1>
                    </div>
                    <div className="w-60 h-24  flex justify-center items-center">
                      <h1>Check</h1>
                    </div>
                    <div className="w-60 h-24 flex justify-center items-center ">
                      <h1>Amount</h1>
                    </div>
                    <hr />
                  </div>
                  {modalData.map((el) => (
                    <div key={el.uuid}>
                      <ModalCard key={el.uuid} el={el} />
                      <hr />
                    </div>
                  ))}
                  <div className="w-12/12  flex items-center justify-center  ">
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => addToProfileList(profileCoin)}
                    >
                      ADD
                    </Button>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      ) : (
        <div>
          {Object.keys(profileList).map((key) => (
            <div key={profileList[key].uuid}>
              <h1>{profileList[key].name}</h1>

              {/* <h1>{(finalValue * profileList[key].price).toLocaleString()}</h1> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
