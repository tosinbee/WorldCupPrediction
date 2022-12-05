import React from "react";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="button"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add new Agent
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl font=semibold">Create New Agent</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black rounded-full border border-black mx-6 h-7 w-7 text-s block pb-4 px-2 ">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative w-full p-6 flex-auto">
                  <Form />
                </div>
                <div className="flex items-center px-4 py-6 justify-end border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black w-36 h-12 bg-brightGrey px-4 py-2 mr-72 text-sm outline-none rounded focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-mookiePurple active:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;


export default Modal;
