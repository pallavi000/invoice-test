import React, { useId } from "react";
import { Link } from "react-router-dom";
import { dueDateString } from "../utils/Utils";
import rightArrowIcon from "../icons/icon-arrow-right.svg";

function InvoiceList({ item }) {
  return (
    <Link
      to={`/invoice-detail/${item.id}`}
      className="grid grid-cols-5 gap-3 bg-input my-5 rounded-md w-full py-5 px-4 items-center"
    >
      <div className="font-semibold text-sm">
        <span className="text-btn_primary">#</span>
        {item.id}
      </div>
      <div className="text-sm">
        {dueDateString(item.createdAt, item.paymentTerms)}
      </div>
      <div className="text-sm">{item.clientName}</div>
      <div className="font-bold text-lg">${item.total}</div>
      <div className="flex items-center">
        {item.status == "paid" ? (
          <div className="text-paid capitalize bg-paid font-semibold w-fit bg-opacity-10 px-6 rounded-md text-sm text-center py-3 w-32 flex items-center gap-2 justify-center ">
            <div className="w-2 h-2 rounded-full bg-paid"></div> {item.status}
          </div>
        ) : item.status == "pending" ? (
          <div className="text-pending capitalize bg-pending font-semibold w-fit bg-opacity-10 px-6 rounded-md text-sm text-center py-3 w-32 flex items-center gap-2 justify-center ">
            <div className="w-2 h-2 rounded-full bg-pending"></div>{" "}
            {item.status}
          </div>
        ) : (
          <div className="text-white capitalize bg-white font-semibold w-fit bg-opacity-10 px-6 rounded-md text-sm text-center py-3 w-32 flex items-center gap-2 justify-center  ">
            <div className="w-2 h-2 rounded-full bg-white"></div> {item.status}
          </div>
        )}

        <img src={rightArrowIcon} className="h-3 ml-3" />
      </div>
    </Link>
  );
}

export default InvoiceList;
