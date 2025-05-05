import prisma from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const limit = 12;

export async function GET(request: NextRequest) {
  let posts;
  const page : number = parseInt(request.nextUrl.searchParams.get("page") || "1");
  const query : string | undefined | null = request.nextUrl.searchParams.get("query");
  const options : Prisma.PostFindManyArgs = { skip: (page - 1) * limit, take: limit, orderBy: { createdAt: "desc" }, select: { title: true, picture: true, readTime: true, createdAt: true, slug: true } };
  try {
    if(!query) { posts = await prisma.post.findMany({ where: { published: true }, ...options }) }
    else {
      posts = await prisma.post.findMany({
        where: { published:{equals : true}, OR: [ { title: { contains: query, mode: "insensitive" } },{ tags: { contains: query, mode: "insensitive" } } ] }, ...options 
      });
    }
    const total = await prisma.post.count();
    const pages = Math.ceil(total / limit);
    const data = { data: posts, pagination: { total, page, last : pages == page, pages } };
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

