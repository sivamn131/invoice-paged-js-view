import React from "react";

const InvoiceHeader = () => (
  <div>
    <div class="grid-3">
      <h1>Logo</h1>
      <div>
        <h5>Project</h5>
        <h3>
          5200 Praire Dr <span>2021-293</span>
        </h3>
      </div>
      <div></div>

      <div></div>
      <div>
        <h5>Bill from</h5>
        <h4>Architects, Inc.</h4>
        <p>
          1000 Market St
          <br />
          San Francisco, CA 94102
        </p>
      </div>
      <div>
        <h5>Bill to</h5>
        <h4>The Client, LLC</h4>
        <p>
          48 California St
          <br />
          San Francisco, CA 94119
        </p>
      </div>

      <div>
        <h5>Issue date</h5>
        <p>Aug 9, 2021</p>
      </div>
      <div>
        <h5>Terms</h5>
        <p>Net 30</p>
      </div>
      <div>
        <h5>Due date</h5>
        <p>Sep 3, 2021</p>
      </div>

      <div>
        <h5>Services through</h5>
        <p>Jul 1, 2021 - Jul 31, 2021</p>
      </div>
      <div>
        <h5>Reference number</h5>
        <p>PA-2381</p>
      </div>
      <div>
        <h5>Invoice number</h5>
        <p>2021-0048</p>
      </div>
    </div>
  </div>
);

export default InvoiceHeader;
