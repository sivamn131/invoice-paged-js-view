import React from "react";
import NestedTable from "./NestedTable.js";
import Table from "./Table.js";
import InvoiceHeader from "./InvoiceHeader.js";

const Invoice = () => (
  <div>
    <InvoiceHeader />
    <NestedTable />
    <Table />
    <Table />
    <Table />
    <Table />

    <NestedTable />
    <Table />
    <Table />
  </div>
);

export default Invoice;
