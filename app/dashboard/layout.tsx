import "../globals.css";
import React from "react";
import SideMenu from "./SideMenu";
interface Props {
  children: React.ReactNode;
  auth: React.ReactNode;
}

interface Props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row">
        <SideMenu />
        <main className="h-full flex-1 grow">{children}</main>
      </div>
    </>
  );
};

export default Dashboard;
