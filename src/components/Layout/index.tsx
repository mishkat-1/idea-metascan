import React from "react";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex-1 bg-blue-800">
      {/* <section
                className='container px-6 py-6 mx-auto md:py-6 md:px-6 lg:py-10 sm:px-8'
            >
                {children}
            </section> */}
    </div>
  );
};

export default Layout;
