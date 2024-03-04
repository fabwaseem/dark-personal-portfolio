import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  image,
  tags,
}: {
  title: string;
  image: string;
  tags: string[];
}) => {
  return (
    <div className="block border-b-2  pb-4  relative group">
      <Link href={"#"} className="block relative w-full h-60 sm:h-72  rounded-lg overflow-hidden md:hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </Link>
      <Link
        href={"#"}
        className="text-lg sm:text-2xl md:text-3xl pt-4 w-full line-clamp-1 "
      >
        {title}
      </Link>
      <div className="absolute w-60 h-60 right-0 top-1/2 -translate-y-1/2 rounded-lg overflow-hidden group-hover:-rotate-[20deg] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 duration-500 transition-all pointer-events-none max-md:hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={"/tag=#"}
            className="border-2 rounded-full px-4 py-1 mt-4 block w-max text-xs text-grey-2"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
