import React, { useEffect } from "react";
import { Previewer } from "pagedjs";

import Invoice from "./Invoice";

const App = () => {
  useEffect(() => {
    const previewer = new Previewer();
    previewer.preview(
      document.querySelector("#root").innerHTML,
      ["/src/core.css"],
      document.querySelector("#preview")
    );
  }, []);
  return <Invoice />;
};

export default App;
