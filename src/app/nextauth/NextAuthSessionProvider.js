"use client";

import { SessionProvider } from "next-auth/react";
import AdminPage from "../(dashboard)/admin/page";

const NextAuthSessionProvider = ({ children }) => {
  return <SessionProvider>{children}
  {AdminPage}
  </SessionProvider>;
};

export default NextAuthSessionProvider;
