import { SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      Hello
      <UserButton />
      <SignInButton />
    </div>
  );
};

export default DashboardPage;
