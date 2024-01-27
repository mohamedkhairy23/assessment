import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="container mx-auto py-10 flex-1">{children}</div>
    </div>
  );
};

export default Layout;
