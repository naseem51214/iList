import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-end gap-3 bg-green-700 text-center text-white mt-4  h-14 p-4 rounded-2xl">
          <li className="mr-14 hover:">Home</li>
          <li className="mr-14 hover:">About</li>
          <li className="mr-14 hover:">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
