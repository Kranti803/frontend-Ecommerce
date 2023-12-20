import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <section className="min-h-screen p-4 border-2 border-red-400 bg-slate-100">
      <aside className="flex gap-3 h-full">
        <div className="border-2 rounded-lg bg-white">
          <Sidebar />
        </div>
        <div className="border-2 border-purple-600 flex-1">Dashboard</div>
      </aside>
    </section>
  );
};

export default Dashboard;
