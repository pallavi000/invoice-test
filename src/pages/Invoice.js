import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addIcon from "../icons/icon-plus.svg";
import rightArrowIcon from "../icons/icon-arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { dueDate, dueDateString } from "../utils/Utils";
import data from "../assets/data.json";
import { initDataLoad } from "../features/invoice/InvoiceSlice";
import checkIcon from "../icons/icon-check.svg";
import InvoiceList from "../component/InvoiceList";
import { Button, Modal } from "flowbite-react";
import Drawer from "../component/Drawer";
import "flowbite";
import AddInvoice from "../component/AddInvoice";

function Invoice() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initDataLoad(data));
  }, []);

  const { invoices } = useSelector((state) => state.invoice);

  const [show, setShow] = useState(false);
  return (
    <>
      <Drawer show={show} setShow={setShow} Component={AddInvoice} />

      <div className=" bg-form_background text-white w-full h-screen">
        <div className="container p-10 w-100 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="flex-col">
              <div className="text-2xl mb-2 font-bold">Invoices</div>
              <div className="text-sm">
                There are {invoices.length} total invoices
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold mr-5 text-sm">Filter by status</div>
              <button
                onClick={() => setShow(true)}
                className="flex relative rounded-full py-3 px-5 font-semibold text-12 bg-btn_primary cursor-pointer"
              >
                <div className="bg-white absolute left-2 text-md top-1  font-bold translate-x-0 translate-y-0.5 h-9 w-9 flex justify-center items-center text-btn_primary rounded-full">
                  <img src={addIcon} />
                </div>{" "}
                <span className="ml-9">New Invoice</span>
              </button>
            </div>
          </div>

          {/* table */}
          <section id="table">
            {invoices.map((item, index) => {
              return <InvoiceList item={item} key={index} />;
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default Invoice;
