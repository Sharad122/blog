import { notFound } from 'next/navigation';
import { dateConvertor } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { TimerIcon } from '@radix-ui/react-icons';
import ShareButtons from '@/components/parts/share-buttons';

const getPost = async ( slug : string ) => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/post/${slug}`, { next : { revalidate : 3600 }});
  if (res.ok) return await res.json();
  else throw new Error("Couldn't load the blog post !");
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  
  const post = await getPost((await params).slug) || notFound();
  const { title, content, createdAt, readTime, tags } = post;

  return (
    <div className="max-w-[800px] px-4 py-6 space-y-3 mx-auto">
      <section className="space-y-7">
        <h1 className="text-2xl sm:text-[26px] md:text-[28px] xl:text-3xl font-semibold leading-9 onest">{title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 text-[13px] dark:text-neutral-300"><TimerIcon /><span>{readTime} min read</span></div>
          <div className="flex items-center gap-x-2 text-sm">-<span>By</span><span className="text-[15px] font-bold">Mr. Sharad</span></div>
        </div>
        <div className="h-12 flex items-center justify-between border-y">
          <div className="text-sm font-bold">{dateConvertor(createdAt)}</div>
          <ShareButtons title={title}/>
        </div>
      </section>
      <article className="article" dangerouslySetInnerHTML={{ __html: content }} ></article>
      <div className="space-x-3">{tags.split(",").map((tag:string, key:number)=>(<Badge variant="outline" key={key}>{tag}</Badge>))}</div>
    </div>
  )

};

export default page;