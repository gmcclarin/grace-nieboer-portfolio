

const CertModal = ({showModal, setShowModal}) => {
    
  return (
    <>
      <button
        className="text-indigo-800 text-lg font-black px-3 cursor-pointer z-40 flex justify-center border-indigo-800 border-2 rounded-full py-3 w-1/4 sm:w-1/5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        CERTIFICATION
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                </div> */}
                <div className="relative p-6 flex-auto">
                  <div className="w-full">
                    <img className="object-contain" src="https://i.postimg.cc/9QD6gcFq/Screenshot-2024-03-22-at-11-54-43-AM.png"/>
                  </div>
                </div>
                <div className="flex items-center justify-end p-5 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 bg-orange-200 rounded-full background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
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

export default CertModal;