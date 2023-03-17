import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import VitalSigns from "./components/forms/vitalSigns";
import Success from "./components/forms/success";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<VitalSigns />}>
        <Route path="/success" element={<Success />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
