import React from "react";
import "./table.css";

const Table = () => (
  <div className="no-break">
    <div className="table-title">
      <div>Fixed Fee Services</div>
      <div>$10,000</div>
    </div>
    <table>
      <thead>
        <tr>
          <td>Phase</td>
          <td className="border">Planned</td>
          <td>Previously Invoiced</td>
          <td className="border-right">Amount</td>
          <td>Current Invoice</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Schematic Design</td>
          <td className="border">$10,000.00</td>
          <td>80.00%</td>
          <td className="border-right">$8,000.00</td>
          <td>80.00%</td>
          <td className="strong">$0.00</td>
        </tr>
        <tr>
          <td>Design Development</td>
          <td className="border">$20,000.00</td>
          <td>60.00%</td>
          <td className="border-right">$12,000.00</td>
          <td>80.00%</td>
          <td className="strong">$4,000.00</td>
        </tr>
        <tr>
          <td>Construction Documentation</td>
          <td className="border">$10,000.00</td>
          <td>80.00%</td>
          <td className="border-right">$8,000.00</td>
          <td>80.00%</td>
          <td className="strong">$4,000.00</td>
        </tr>
        <tr>
          <td>Bidding</td>
          <td className="border">$10,000.00</td>
          <td>80.00%</td>
          <td className="border-right">$8,000.00</td>
          <td>80.00%</td>
          <td className="strong">$0.00</td>
        </tr>
        <tr>
          <td>Construction Documentation</td>
          <td className="border">$10,000.00</td>
          <td>80.00%</td>
          <td className="border-right">$8,000.00</td>
          <td>80.00%</td>
          <td className="strong">$4,000.00</td>
        </tr>
        <tr>
          <td>Bidding</td>
          <td className="border">$10,000.00</td>
          <td>80.00%</td>
          <td className="border-right">$8,000.00</td>
          <td>80.00%</td>
          <td className="strong">$0.00</td>
        </tr>
        <tr>
          <td>Construction Administration</td>
          <td className="border">$10,000.00</td>
          <td>80.00%</td>
          <td className="border-right">$8,000.00</td>
          <td>80.00%</td>
          <td className="strong">$0.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="strong">Fixed Services Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="strong">$8,000.00</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default Table;
