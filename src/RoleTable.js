import React from "react";
import "./table.css";

const RoleTable = () => (
  <table>
    <thead>
      <tr>
        <td>Role</td>
        <td>Previously Billed</td>
        <td>Current Invoice</td>
        <td>Hourly Rate</td>
        <td>Amount</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Principal</td>
        <td>100hrs</td>
        <td>10hrs</td>
        <td>$250</td>
        <td className="strong">$2,000.00</td>
      </tr>
      <tr>
        <td>Project Architect</td>
        <td>40hrs</td>
        <td>30hrs</td>
        <td>$150</td>
        <td className="strong">$4,500.00</td>
      </tr>
      <tr>
        <td>Designer</td>
        <td>80hrs</td>
        <td>10hrs</td>
        <td>$125</td>
        <td className="strong">$1,250.00</td>
      </tr>
    </tbody>
  </table>
);

export default RoleTable;
