import prisma from "@/lib/prisma";
import { NextRequest, NextResponse  } from "next/server";

export async function GET ( request: NextRequest, { params }: { params: Promise<{ slug: string }> } ) {
  try {
    const { slug } = await params;
    const post = await prisma.post.findUnique( { where: { slug, published: true } } );
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};