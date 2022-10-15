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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TransitionsModal() {
  const { modalData } = React.useContext(appContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [coinChecked, setCoinChecked] = React.useState(
    new Array(modalData.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = coinChecked.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState);
  };

  console.log(coinChecked);
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

                {modalData.map(
                  ({ uuid, rank, iconUrl, name, price, marketCap }, index) => (
                    <tr key={uuid}>
                      <td className="w-20 h-24">
                        <div className="flex justify-center items-center">
                          {rank}
                        </div>
                      </td>
                      <td className="w-60 h-24  flex flex-col justify-center items-center">
                        <img src={iconUrl} width={40} alt="symbol" />
                        {name}
                        <hr />
                      </td>
                      <td className="w-60 h-24">
                        <div className="flex justify-center items-center">
                          {Number(price).toLocaleString()}
                        </div>
                      </td>
                      <td className="w-60 h-24">
                        <div className="flex justify-center items-center">
                          {Number(marketCap).toLocaleString()}
                        </div>
                      </td>
                      <td className="w-60 h-24">
                        <div className="flex justify-center items-center">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={coinChecked[index]}
                            onChange={() => handleOnChange(index)}
                          />
                        </div>
                      </td>
                      <td className="w-60 h-24 ">
                        <div className="flex justify-center items-center">
                          {coinChecked ? (
                            <div>
                              <input
                                type={"number"}
                                className="p-5    text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 mt-3 z-40"
                                // onChange={(e) => onChange(e.target.value)}
                                // value={coinValue}
                              />
                            </div>
                          ) : (
                            <div>
                              <input
                                type={"number"}
                                className="p-5    text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 mt-3 z-40"
                                readOnly
                                // onChange={(e) => onChange(e.target.value)}
                                // value={coinValue}
                              />
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tabel>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
