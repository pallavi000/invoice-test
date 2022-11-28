import React, { useEffect, useState } from "react";
import addIcon from "../icons/icon-plus.svg";
import { useNavigate } from "react-router-dom";
import AddItem from "./AddItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addInvoiceInputField,
  cleanInvoiceInput,
  onChangeHandler,
  onClientAddressChangeHandler,
  onSenderAddressChangeHandler,
} from "../features/invoiceInput/InvoiceInputSlice";
import { saveAndSend, saveAsDraft } from "../features/invoice/InvoiceSlice";

function AddInvoice(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const invoiceInput = useSelector((state) => state.invoiceInput);
  const { items } = invoiceInput;

  useEffect(() => {
    dispatch(cleanInvoiceInput());
  }, [props]);

  function saveDraft() {
    dispatch(saveAsDraft(invoiceInput));
    props.setShow(false);
  }
  function saveInvoice(e) {
    e.preventDefault();
    dispatch(saveAndSend(invoiceInput));
    props.setShow(false);
  }

  return (
    <div className=" text-white w-full h-full bg-transparent">
      <div className=" p-2 pb-5 w-100 mx-auto">
        <div className="text-3xl mb-5">New Invoice</div>
        <form id="bill-from w-full" onSubmit={(e) => saveInvoice(e)}>
          <div className=" font-semibold text-blue-700 text-sm mb-5">
            Bill From
          </div>
          <div className="flex-col mb-5">
            <div className="text-sm mb-2">Street Address</div>
            <input
              type="text"
              name="street"
              onChange={(e) =>
                dispatch(
                  onSenderAddressChangeHandler({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              className="bg-input p-3 rounded-md w-full"
              required
            ></input>
          </div>
          <div className="grid grid-cols-3 gap-5 mb-3">
            <div className="flex-col">
              <div className="text-sm mb-2">City</div>
              <input
                type="text"
                name="city"
                onChange={(e) =>
                  dispatch(
                    onSenderAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                className="bg-input p-3 rounded-md w-full"
                required
              ></input>
            </div>
            <div className="flex-col">
              <div className="text-sm mb-2">Post Code</div>
              <input
                type="text"
                name="postCode"
                onChange={(e) =>
                  dispatch(
                    onSenderAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                required
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>
            <div className="flex-col">
              <div className="text-sm mb-2">Country</div>
              <input
                type="text"
                name="country"
                onChange={(e) =>
                  dispatch(
                    onSenderAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                required
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>
          </div>

          <div className="text-blue-700 font-semibold text-sm mb-5 mt-6">
            Bill To
          </div>
          <div className="flex-col mb-5">
            <div className="text-sm mb-2">Client's Name</div>
            <input
              type="text"
              name="clientName"
              onChange={(e) =>
                dispatch(
                  onChangeHandler({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
              className="bg-input p-3 rounded-md w-full"
            ></input>
          </div>
          <div className="flex-col mb-5">
            <div className="text-sm mb-2">Client's Email</div>
            <input
              type="text"
              name="clientEmail"
              onChange={(e) =>
                dispatch(
                  onChangeHandler({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
              className="bg-input p-3 rounded-md w-full"
            ></input>
          </div>
          <div className="flex-col mb-5">
            <div className="text-sm mb-2">Street Address</div>
            <input
              type="text"
              name="street"
              onChange={(e) =>
                dispatch(
                  onClientAddressChangeHandler({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
              className="bg-input p-3 rounded-md w-full"
            ></input>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-3">
            <div className="flex-col">
              <div className="text-sm mb-2">City</div>
              <input
                type="text"
                name="city"
                required
                onChange={(e) =>
                  dispatch(
                    onClientAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>
            <div className="flex-col">
              <div className="text-sm mb-2">Post Code</div>
              <input
                type="text"
                name="postCode"
                required
                onChange={(e) =>
                  dispatch(
                    onClientAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>
            <div className="flex-col">
              <div className="text-sm mb-2">Country</div>
              <input
                type="text"
                name="country"
                required
                onChange={(e) =>
                  dispatch(
                    onClientAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-3">
            <div className="flex-col">
              <div className="text-sm mb-2">Issue Date</div>
              <input
                type="date"
                name="createdAt"
                required
                onChange={(e) =>
                  dispatch(
                    onChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>

            <div className="flex-col">
              <div className="text-sm mb-2">Payment Terms</div>
              <select
                className="font-semibold bg-input p-3 rounded-md w-full"
                name="paymentTerms"
                required
                onChange={(e) =>
                  dispatch(
                    onChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              >
                <option value="30">Net 30 days</option>
                <option value="10">Net 10 days</option>
              </select>
            </div>
          </div>
          <div className="flex-col mb-5">
            <div className="text-sm mb-2">Project Description</div>
            <input
              type="text"
              name="description"
              onChange={(e) =>
                dispatch(
                  onChangeHandler({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
              className="bg-input p-3 rounded-md w-full"
            ></input>
          </div>
          <section id="items">
            <div className="font-semibold text-lg mb-4">Item List</div>
            <div className="grid grid-cols-9 gap-4 mb-3">
              <div className="text-sm col-span-3">Item Name</div>
              <div className="text-sm col-span-1">Qty</div>
              <div className="text-sm col-span-2">Price</div>
              <div className="text-sm col-span-2">Total</div>
              <div className="col-span-1"></div>
            </div>
            {items.map((product, index) => {
              return <AddItem product={product} products={items} key={index} />;
            })}
            <div
              className="rounded-full cursor-pointer text-center flex items-center justify-center mt-5 bg-input  py-3 px-5"
              onClick={() => dispatch(addInvoiceInputField())}
            >
              <img src={addIcon} className="h-fit w-fit mr-2" />{" "}
              <span>Add New Item</span>
            </div>
          </section>
          <div className="flex justify-between items-center my-5">
            <div
              className="bg-white hover:bg-black hover:text-white text-gray-800 rounded-full cursor-pointer py-2 px-4 font-semibold"
              onClick={() => navigate(-1)}
            >
              Discard
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => saveDraft()}
                className="rounded-full py-3 px-5 cursor-pointer bg-input hover:bg-blue-900 text-white font-semibold"
              >
                Save as Draft
              </button>
              <button className="rounded-full py-3 px-5 cursor-pointer bg-btn_primary hover:bg-blue-400 text-white font-semibold">
                Save and Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddInvoice;
