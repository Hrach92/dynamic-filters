import React, { Suspense } from "react";

const Loadable = (Component) => (props) =>
(
  <Suspense fallback={"loading.."}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
