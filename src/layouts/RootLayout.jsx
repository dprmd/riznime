/* eslint-disable no-extra-boolean-cast */

import { useEffect } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";

// components
import Header from "../components/Header/Header";

export default function RootLayout() {
  const navigate = useNavigate();
  const root = useMatch("/");

  useEffect(() => (Boolean(root) ? navigate("/home") : () => {}));

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
