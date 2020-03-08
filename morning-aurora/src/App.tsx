import React from "react";

import CSS from "csstype";

// import background from "assets/backgroundVersion1.jpg";

const AppStyles: CSS.Properties = {
  backgroundImage: `url(assets/backgroundVersion1.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  flex: 1
};

function App() {
  return <div style={AppStyles}>Text</div>;
}

export default App;
