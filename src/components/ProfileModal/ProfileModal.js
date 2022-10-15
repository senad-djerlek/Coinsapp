import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { appContext } from "../../common/context";
import Checkbox from "@mui/material/Checkbox";

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
  const { profileCoin, toggleProfileCoin } = React.useContext(appContext);
  console.log(profileCoin);

  const { modalData } = React.useContext(appContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ref = React.useRef(null);
  const handleFocus = () => {
    ref.current.focus();
  };

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
            <div className="w-12/12">
              <tabel className="table-auto">
                <tr>
                  <th className="w-20">Rank</th>
                  <th className="w-60">Name</th>
                  <th className="w-60">Price</th>
                  <th className="w-60">marketCap</th>
                  <th className="w-60">Check</th>
                  <th className="w-60">Amount</th>
                </tr>

                {modalData.map((el) => (
                  <tr key={el.uuid}>
                    <td className="w-20 h-24">
                      <div className="flex justify-center items-center">
                        {el.rank}
                      </div>
                    </td>
                    <td className="w-60 h-24  flex flex-col justify-center items-center">
                      <img src={el.iconUrl} width={40} alt="symbol" />
                      {el.name}
                      <hr />
                    </td>
                    <td className="w-60 h-24">
                      <div className="flex justify-center items-center">
                        {Number(el.price).toLocaleString()}
                      </div>
                    </td>
                    <td className="w-60 h-24">
                      <div className="flex justify-center items-center">
                        {Number(el.marketCap).toLocaleString()}
                      </div>
                    </td>
                    <td className="w-60 h-24">
                      <div className="flex justify-center items-center">
                        <input
                          type="checkbox"
                          name={el.name}
                          value={el.name}
                          onClick={() => {
                            toggleProfileCoin(el);
                            handleFocus();
                          }}
                        />
                      </div>
                    </td>
                    <td className="w-60 h-24 ">
                      <div className="flex justify-center items-center">
                        {profileCoin[el.uuid] ? (
                          <div>
                            <input
                              ref={ref}
                              type={"number"}
                              className="p-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 mt-3 z-40"
                            />
                          </div>
                        ) : (
                          <div>
                            <input
                              type={"number"}
                              readOnly
                              className="p-5 focus-visible:none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 mt-3 z-40"
                            />
                          </div>
                        )}
                      </div>
                    </td>
                    <hr />
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
