import React from "react";
import { deleteInvoice } from "../features/invoice/InvoiceSlice";

function MyModal({ handleOnClose, visible, item, dispatch, navigate }) {
  if (!visible) return null;

  function removeInvoice() {
    dispatch(deleteInvoice(item.id));
    navigate(-1);
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
      <div className=" text-white p-6 bg-input rounded-md w-1/3">
        <h1 className="font-bold text-lg text-left mb-5">Confirm Deletion</h1>
        <p className="text-sm">
          Are you sure you want to delete invoice #{item.id}? This action cannot
          be undone.
        </p>
        <div className="flex items-center justify-end gap-2 mt-4">
          <div
            className="font-medium rounded-full  text-center cursor-pointer py-3 px-4 text-sm bg-btn_secondary hover:bg-blue-900 text-white"
            onClick={handleOnClose}
          >
            Cancel
          </div>
          <div
            className="font-medium rounded-full  text-center cursor-pointer py-3 px-4 text-sm bg-opacity-40 hover:bg-red-600 bg-red-600 text-white"
            onClick={() => removeInvoice()}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyModal;
