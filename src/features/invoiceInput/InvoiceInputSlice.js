import { createSlice } from "@reduxjs/toolkit";
import { stringGen } from "../../utils/Utils";
const initialState = {
  id: stringGen(),
  status: "draft",
  clientEmail: "",
  clientName: "",
  createdAt: "",
  description: "",
  total: 0,
  paymentTerms: 30,
  paymentDue: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [
    {
      id: stringGen(),
      name: "",
      price: "",
      quantity: "",
      total: 0,
    },
  ],
};

const invoiceInputSlice = createSlice({
  name: "invoiceInput",
  initialState: initialState,
  reducers: {
    onChangeHandler: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    onClientAddressChangeHandler: (state, action) => {
      return {
        ...state,
        clientAddress: {
          ...state.clientAddress,
          [action.payload.name]: action.payload.value,
        },
      };
    },

    onSenderAddressChangeHandler: (state, action) => {
      return {
        ...state,
        senderAddress: {
          ...state.senderAddress,
          [action.payload.name]: action.payload.value,
        },
      };
    },
    addInvoiceInputField: (state, action) => {
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: stringGen(),
            name: "",
            price: "",
            quantity: "",
            total: 0,
          },
        ],
      };
    },
    removeInvoiceInputField: (state, action) => {
      return {
        ...state,
        items: state.items.filter((product) => product.id != action.payload),
      };
    },
    onItemChangeHandler: (state, action) => {
      if (action.payload.product.id) {
        var index = state.items.findIndex(
          (product) => product.id == action.payload.product.id
        );
      } else {
        var index = state.items.findIndex(
          (product) => product.name == action.payload.product.name
        );
      }
      if (index != -1) {
        state.items[index] = {
          ...state.items[index],
          [action.payload.name]: action.payload.value,
        };
        state.items[index].total =
          Number(state.items[index].quantity) *
          Number(state.items[index].price);
        var total = 0;
        state.items.map((item) => {
          total += item.total;
        });
        state.total = total;
      }
    },
    populateInvoiceInput: (state, action) => {
      return action.payload;
    },
    cleanInvoiceInput: (state, action) => {
      var cleanState = { ...initialState };
      cleanState.id = stringGen();
      return cleanState;
    },
  },
});

export const {
  onChangeHandler,
  addInvoiceInputField,
  removeInvoiceInputField,
  onItemChangeHandler,
  onClientAddressChangeHandler,
  onSenderAddressChangeHandler,
  populateInvoiceInput,
  cleanInvoiceInput,
} = invoiceInputSlice.actions;

export default invoiceInputSlice.reducer;
