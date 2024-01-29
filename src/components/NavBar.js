import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <div className="mb-20">
      <Navbar
        className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        fluid
        rounded
      >
        <Link to="/">
          <h1 className="text-3xl font-bold text-center my-3">Home</h1>
        </Link>
        <div className="flex gap-2 md:order-2">
          <Navbar.Toggle />
        </div>{" "}
        <Navbar.Collapse>
          <Link
            active
            to="/one"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            Challenge1
          </Link>
          <Link
            active
            to="/"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            <p>Challenge2</p>
          </Link>
          <Link
            active
            to="/three"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            Challenge3
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
