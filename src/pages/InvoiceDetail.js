import React, { useState } from "react";
import arrowIcon from "../icons/icon-arrow-left.svg";
import { Link, useParams } from "react-router-dom";
import "flowbite";
import { useNavigate } from "react-router-dom";
import MyModal from "../component/MyModal";
import { useDispatch, useSelector } from "react-redux";
import { dueDate, dueDateString } from "../utils/Utils";
import { markAsPaid, markAsPending } from "../features/invoice/InvoiceSlice";
import Drawer from "../component/Drawer";
import EditInvoice from "../component/EditInvoice";

function InvoiceDetail() {
  const navigate = useNavigate();
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const params = useParams();
  var itemId = params.id;

  const { invoices } = useSelector((state) => state.invoice);

  const item = invoices.find((invoice) => invoice.id == itemId);
  if (!item) return navigate("/");

  return (
    <div className=" bg-form_background text-white w-full h-full">
      <Drawer
        Component={EditInvoice}
        id={itemId}
        show={show}
        setShow={setShow}
      />
      <div className="container p-10 w-100 mx-auto">
        <div
          className=" text-sm text-white flex items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={arrowIcon} className="mr-4 h-4"></img>
          Go Back
        </div>
        <div className="flex justify-between items-center gap-3 bg-input my-5 rounded-md w-full py-6 px-4">
          {/* <div className="flex items-center">
            <div className="font-medium">Status</div>
            <div className="font-medium capitalize rounded-lg text-center cursor-pointer py-2 px-5 ml-3 text-sm  bg-pending bg-opacity-10 text-pending">
              {item.status}
            </div>
          </div> */}
          <div className="flex items-center gap-3">
            <div className="font-medium">Status</div>

            {item.status == "paid" ? (
              <div className="text-paid capitalize bg-paid font-semibold w-fit bg-opacity-10 px-2 rounded-md text-sm text-center py-3 w-28 flex items-center gap-2 justify-center ">
                <div className="w-2 h-2 rounded-full bg-paid"></div>{" "}
                {item.status}
              </div>
            ) : item.status == "pending" ? (
              <div className="text-pending capitalize bg-pending font-semibold w-fit bg-opacity-10 px-2 rounded-md text-sm text-center py-3 w-28 flex items-center gap-2 justify-center ">
                <div className="w-2 h-2 rounded-full bg-pending"></div>{" "}
                {item.status}
              </div>
            ) : (
              <div className="text-white capitalize bg-white font-semibold w-fit bg-opacity-10 px-2 rounded-md text-sm text-center py-3 w-28 flex items-center gap-2 justify-center  ">
                <div className="w-2 h-2 rounded-full bg-white"></div>{" "}
                {item.status}
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setShow(true)}
              className="font-medium rounded-3xl  text-center cursor-pointer py-3 px-5 text-sm bg-btn_secondary hover:bg-form_background text-white"
            >
              Edit
            </button>
            <div
              className="font-medium rounded-3xl text-center cursor-pointer py-3 px-5  text-sm bg-delete bg-opacity-60 hover:bg-opacity-100 text-white"
              onClick={() => setShowMyModal(true)}
            >
              Delete
            </div>
            {item.status == "pending" ? (
              <div
                className="font-medium rounded-3xl text-center cursor-pointer  px-5 text-sm py-3 bg-btn_primary hover:bg-blue-500 text-white"
                onClick={() => dispatch(markAsPaid(item.id))}
              >
                Mark as Paid
              </div>
            ) : item.status == "paid" ? (
              <div
                className="font-medium rounded-md text-center cursor-pointer  px-5 text-sm py-3 bg-btn_primary hover:bg-blue-500 text-white"
                onClick={() => dispatch(markAsPending(item.id))}
              >
                Mark as Pending
              </div>
            ) : null}
          </div>
        </div>
        <div className=" bg-input my-5 rounded-md w-full p-10 ">
          <div className="flex justify-between items-center">
            <div className="flex-col">
              <div className="font-bold text-white">
                <span className="text-btn_primary mr-2">#</span>
                {item.id}
              </div>
              <div className="text-md text-white">{item.description}</div>
            </div>
            <div className="flex-col text-right">
              <div className="text-md text-white">
                {item.senderAddress?.street}
              </div>
              <div className="text-md text-white">
                {item.senderAddress?.city}
              </div>
              <div className="text-md text-white">
                {item.senderAddress?.postCode}
              </div>
              <div className="text-md text-white">
                {item.senderAddress?.country}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-5">
            <div className="flex-col mb-5">
              <div className="text-md text-white mb-2">Invoice Date</div>
              <div className="font-bold text-lg text-white ">
                {item.createdAt}
              </div>
            </div>
            <div className="flex-col mb-5">
              <div className="text-md text-white mb-2">Bill To</div>
              <div className="font-bold text-md text-white ">
                {item.clientName}
              </div>
              <div className="text-sm text-white ">
                {item.clientAddress?.street}
              </div>
              <div className="text-sm text-white ">
                {item.clientAddress?.city}
              </div>
              <div className="text-sm text-white ">
                {item.clientAddress?.country}
              </div>
            </div>
            <div className="flex-col mb-5">
              <div className="text-md text-white mb-2">Sent To</div>
              <div className="font-bold text-lg text-white ">
                {item.clientEmail}
              </div>
            </div>

            <div className="flex-col mb-5">
              <div className="text-md text-white mb-2">Payment Due</div>
              <div className="font-bold text-lg text-white ">
                {dueDateString(item.createdAt, item.paymentTerms)}
              </div>
            </div>
          </div>
          <div className="bg-btn_secondary mt-5 rounded-t-lg w-full p-10">
            <div className="grid grid-cols-5 gap-6 mb-5">
              <div className="col-span-2">Item Name</div>
              <div className="col-span-1">Qty.</div>
              <div className="col-span-1">Price</div>
              <div className="col-span-1">Total</div>
            </div>
            {item.items.map((product, index) => {
              return (
                <div className="grid grid-cols-5 gap-6 mb-5" key={index}>
                  <div className="col-span-2 font-semibold">{product.name}</div>
                  <div className="col-span-1 font-semibold">
                    {product.quantity}
                  </div>
                  <div className="col-span-1 font-semibold">
                    ${product.price}
                  </div>
                  <div className="col-span-1 font-semibold">
                    ${product.total}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center rounded-b-lg bg-black text-white p-7 w-100">
            <div className="font-semibold">Amount Due</div>
            <div className="font-bold text-xl">$ {item.total}</div>
          </div>
        </div>
      </div>

      <MyModal
        handleOnClose={handleOnClose}
        visible={showMyModal}
        item={item}
        dispatch={dispatch}
        navigate={navigate}
      />
    </div>
  );
}

export default InvoiceDetail;
