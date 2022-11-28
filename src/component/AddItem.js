import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  onItemChangeHandler,
  removeInvoiceInputField,
} from "../features/invoiceInput/InvoiceInputSlice";
import deleteIcon from "../icons/icon-delete.svg";

function AddItem({ product, products }) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-9 gap-3 mb-3">
      <input
        name="name"
        type="text"
        value={product.name}
        onChange={(e) =>
          dispatch(
            onItemChangeHandler({
              name: e.target.name,
              value: e.target.value,
              product: product,
            })
          )
        }
        className="bg-input p-3 rounded-md w-full col-span-3"
        required
      ></input>
      <input
        name="quantity"
        onChange={(e) =>
          dispatch(
            onItemChangeHandler({
              name: e.target.name,
              value: e.target.value,
              product: product,
            })
          )
        }
        value={product.quantity}
        className="bg-input p-3 rounded-md w-full col-span-1"
        required
      ></input>
      <input
        name="price"
        onChange={(e) =>
          dispatch(
            onItemChangeHandler({
              name: e.target.name,
              value: e.target.value,
              product: product,
            })
          )
        }
        value={product.price}
        className="bg-input p-3 rounded-md w-full col-span-2"
        required
      ></input>
      <div name="total" className=" p-3 bg-form_background w-full col-span-2">
        {product.total}
      </div>
      {products.length <= 1 ? (
        <div className="col-span-1"></div>
      ) : (
        <button
          type="button"
          className="cursor-pointer col-span-1"
          onClick={() => dispatch(removeInvoiceInputField(product.id))}
        >
          <img className="p-3 rounded-md w-full w-1/2" src={deleteIcon}></img>
        </button>
      )}
    </div>
  );
}

export default AddItem;
