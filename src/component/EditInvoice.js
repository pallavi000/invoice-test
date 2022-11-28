import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateInvoice } from "../features/invoice/InvoiceSlice";
import {
  addInvoiceInputField,
  onChangeHandler,
  onClientAddressChangeHandler,
  onItemChangeHandler,
  onSenderAddressChangeHandler,
  populateInvoiceInput,
} from "../features/invoiceInput/InvoiceInputSlice";
import deleteIcon from "../icons/icon-delete.svg";
import addIcon from "../icons/icon-plus.svg";
import AddItem from "./AddItem";

function EditInvoice(props) {
  const params = useParams();
  var itemId = props.id;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { invoices } = useSelector((state) => state.invoice);
  const data_item = invoices.find((invoice) => invoice.id == itemId);

  useEffect(() => {
    dispatch(populateInvoiceInput(data_item));
  }, [props]);

  const item = useSelector((state) => state.invoiceInput);

  function editInvoice(e) {
    e.preventDefault();
    dispatch(updateInvoice(item));
    props.setShow(false);
  }

  return (
    <div className=" bg-form_background text-white w-full h-full">
      <div className="container p-2 w-100 mx-auto">
        <div className="text-3xl mb-5">Edit #{itemId}</div>
        <form id="bill-from w-full" onSubmit={(e) => editInvoice(e)}>
          <div className="text-blue-900 font-semibold text-sm mb-5">
            Bill From
          </div>
          <div className="flex-col mb-5">
            <div className="text-sm mb-2">Street Address</div>
            <input
              type="text"
              name="street"
              value={item.senderAddress.street}
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
                value={item.senderAddress.city}
                required
                className="bg-input p-3 rounded-md w-full"
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
                value={item.senderAddress.postCode}
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
                value={item.senderAddress.country}
                required
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>
          </div>

          <div className="text-blue-900 font-semibold text-sm mb-5 mt-6">
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
              value={item.clientName}
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
              value={item.clientEmail}
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
              value={item.clientAddress.street}
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
                onChange={(e) =>
                  dispatch(
                    onClientAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                value={item.clientAddress.city}
                required
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>
            <div className="flex-col">
              <div className="text-sm mb-2">Post Code</div>
              <input
                type="text"
                name="postCode"
                onChange={(e) =>
                  dispatch(
                    onClientAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                value={item.clientAddress.postCode}
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
                    onClientAddressChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                value={item.clientAddress.country}
                required
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
                onChange={(e) =>
                  dispatch(
                    onChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                value={item.createdAt}
                required
                className="bg-input p-3 rounded-md w-full"
              ></input>
            </div>

            <div className="flex-col">
              <div className="text-sm mb-2">Payment Terms</div>
              <select
                className="font-semibold bg-input p-3 rounded-md w-full"
                name="paymentTerms"
                required
                value={item.paymentTerms}
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
              value={item.description}
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
            <div className="grid grid-cols-9 gap-3 mb-3">
              <div className="text-sm col-span-3">Item Name</div>
              <div className="text-sm col-span-1">Qty</div>
              <div className="text-sm col-span-2">Price</div>
              <div className="text-sm col-span-2">Total</div>
              <div></div>
            </div>
            {item.items?.map((product, index) => {
              return (
                <AddItem product={product} products={item.items} key={index} />
              );
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
            <div></div>
            <div className="flex gap-3">
              <div
                className="rounded-full py-2 px-4 cursor-pointer bg-input text-white font-semibold"
                onClick={() => navigate(-1)}
              >
                Cancel
              </div>
              <button className="rounded-full py-2 px-4 cursor-pointer bg-btn_primary text-white font-semibold">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditInvoice;
