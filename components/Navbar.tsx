import React from "react";
import { Button } from "./ui/button";

import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex p-4">
        <div className="flex">
          <Link href="/"><h1 className="text-3xl font-bold">Bing</h1></Link>
          
        </div>

        <div className="ml-auto">
          <Link href="/">
            <Button className="mr-3">Sign-in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
