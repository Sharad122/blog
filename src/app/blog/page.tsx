import BlogCard from "@/components/parts/blog-card";
import PaginationStrap from "@/components/parts/pagination-strap";
import { Posts } from "@/lib/types";

let res;
const headers = { 'X-API-Key' : process.env.API_KEY! };

const getPosts = async ( query : string | null | undefined, page : number ) => {
  if(!query) res = await fetch(`https://webhelp-one.vercel.app/api/post?page=${page}`, { next : { revalidate : 1800 }, headers });
  else res = await fetch(`https://webhelp-one.vercel.app/api/post?page=${page}&query=${query}`, { cache : "no-store", headers });
  if (res.ok) return await res.json();
  else throw new Error("Couldn't load the blog posts !");
};c

const page = async ({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) => {
  
  const params = await searchParams;
  const query = params.q ?? '';
  const pageNumber = parseInt(params.page ?? '1', 10); 

  const { data, pagination } = await getPosts(query, pageNumber);

  if (data.length === 0) return <h1>No Blogs Found</h1>;
  
  return (
    <div className="space-y-9 my-9">
      <section className="container space-y-12">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 md:gap-x-12 lg:gap-x-5 xl:gap-x-9 2xl:gap-x-16 gap-y-12 sm:gap-y-16">
          {data.map((post: Posts , index:number) => <BlogCard blog={post} key={index} />)}
        </div>
        <PaginationStrap pagination={pagination}/>
      </section>
    </div>
  )

};

export default page;