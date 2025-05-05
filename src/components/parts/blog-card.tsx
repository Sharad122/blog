"use client";
import Link from "next/link";
import Image from "next/image";
import { dateConvertor } from "@/lib/utils";
import { Posts } from "@/lib/types";

const BlogCard = ({ blog }: { blog : Posts} ) => {

  const { createdAt, picture, title, readTime, slug } = blog;

  return (
    <div className="w-full">
      <div className="rounded-sm overflow-hidden">
        <Image className="w-full " width={1280} height={720} src={picture} alt=""/>
      </div>
      <div className="space-y-4 mt-3">
        <div className="sm:h-12 pb-2"><Link href={`/blog/${slug}`} className="font-medium figtree line-clamp-2">{title}</Link></div>
        <div className="flex items-center justify-between">
          <span className="text-[13px] tracking-wide">{dateConvertor(createdAt)}</span>
          <div className="flex-i gap-x-1.5 text-[12px]"><b>{readTime}</b> min read</div>
        </div>
      </div>
    </div>
  );

};

export default BlogCard;
