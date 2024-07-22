import Postui from "@/components/Postui";
import Searchbar from "@/components/Searchbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { POST } from "@/constants";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex p-10 mt-4">
      <div className="block w-full md:w-1/2">
        {POST.map((post, index) => (
          <div key={index} className="mt-3">
            <Postui
              key={index}
              title={post.title}
              description={post.description}
              label={post.label}
              like={post.like}
              comment={post.comment}
            />
          </div>
        ))}
      </div>

      <div className="hidden ml-auto lg:block">
        <Image src="/th.webp" alt="image" width={472} height={280} />
      </div>
    </div>
  );
};

export default Page;
