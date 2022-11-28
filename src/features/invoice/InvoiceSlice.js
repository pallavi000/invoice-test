import { createSlice } from "@reduxjs/toolkit";
import { dueDate } from "../../utils/Utils";

const initialState = {
  invoices: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: initialState,
  reducers: {
    initDataLoad: (state, action) => {
      if (state.invoices.length) return state;
      state.invoices = action.payload;
    },
    saveAsDraft: (state, action) => {
      state.invoices.unshift(action.payload);
    },
    saveAndSend: (state, action) => {
      const newInvoice = { ...action.payload };
      newInvoice.paymentDue = dueDate(
        newInvoice.createdAt,
        newInvoice.paymentTerms
      );
      newInvoice.status = "pending";
      state.invoices.unshift(newInvoice);
    },
    markAsPaid: (state, action) => {
      var index = state.invoices.findIndex(
        (invoice) => invoice.id == action.payload
      );
      if (index != -1) {
        state.invoices[index].status = "paid";
      }
    },
    markAsPending: (state, action) => {
      var index = state.invoices.findIndex(
        (invoice) => invoice.id == action.payload
      );
      if (index != -1) {
        state.invoices[index].status = "pending";
      }
    },
    deleteInvoice: (state, action) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id != action.payload
      );
    },
    updateInvoice: (state, action) => {
      const newInvoice = { ...action.payload };
      newInvoice.paymentDue = dueDate(
        newInvoice.createdAt,
        newInvoice.paymentTerms
      );
      newInvoice.status = "pending";
      var index = state.invoices.findIndex(
        (invoice) => invoice.id == newInvoice.id
      );
      if (index != -1) {
        state.invoices[index] = newInvoice;
      }
    },
  },
});

export const {
  saveAsDraft,
  saveAndSend,
  markAsPaid,
  initDataLoad,
  deleteInvoice,
  updateInvoice,
  markAsPending,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
