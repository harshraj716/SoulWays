import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <main>
       {children}
      </main>
    </div>
  );
};

export default HomeLayout;
