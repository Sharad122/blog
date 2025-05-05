import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, TelegramIcon } from "@/lib/icons";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

const page = () => {
  const socialLinks = [
    { link: "", icon: <FacebookIcon /> },
    { link: "", icon: <InstagramLogoIcon width={20} height={20} /> },
    { link: "", icon: <TelegramIcon /> },
    { link: "", icon: <GitHubLogoIcon width={20} height={20} /> },
  ];

  return (
    <div className="max-w-[800px] px-4 space-y-3 mx-auto my-9">
      <h1 className="pb-3 upercase text-[29px] onest font-bold tracking-wide">About</h1>
      <div className="flex items-center pt-6 space-x-6">
        <div className="relative size-24 overflow-hidden rounded-sm border-2 border-background shadow-xl">
          <Image
            src="/sharad.jpg"
            alt="author"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-2">
          <h1 className="onest text-3xl font-bold tracking-tight sm:text-2xl">
            Mr. Sharad Parkhi
          </h1>
          <p className="text-[15px]">Writer, Developer & Creative Thinker</p>
        </div>
      </div>
      <article className="article">
        <p>
          Hello! I&apos;m Sharad, the voice and mind behind this blog. With over 3
          years of experience in the tech industry, I&apos;ve developed a passion for
          exploring the intersection of technology, design, and everyday life.
        </p>
        <p>
          My journey began in 2018 when I graduated with a degree in Computer
          Science. Since then, I&apos;ve worked with various startups and established
          companies, helping them build meaningful digital experiences.
        </p>
        <p>
          When I&apos;m not writing code or crafting blog posts, you can find me
          hiking in the mountains, experimenting with new recipes in the
          kitchen, or getting lost in a good book.
        </p>
        <section className="pt-9">
          <h3>Why This Blog?</h3>
          <p>
            I created this space to share my thoughts, experiences, and insights
            on technology, design, and personal growth. My goal is to create
            content that not only informs but also inspires and encourages
            meaningful conversations.
          </p>
          <p>
            Through this blog, I hope to connect with like-minded individuals,
            learn from different perspectives, and contribute to the
            ever-evolving digital landscape in my own small way.
          </p>
        </section>
        <section>
          <h3>Our Mission</h3>
          <p>
            To create content that&apos;s honest, helpful, and human. We believe in
            the power of words to make an impact – and we&apos;re here to do just
            that.
          </p>
        </section>
        <section>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div>
              <h5>Web Development</h5>
              <p>
                Building responsive, accessible websites using modern
                technologies and best practices.
              </p>
            </div>
            <div>
              <h5>Content Creation</h5>
              <p>
                Crafting engaging articles, tutorials, and thought pieces that
                inform and inspire.
              </p>
            </div>
            <div>
              <h5>System Design</h5>
              <p>
                Architecting scalable, maintainable systems with a focus on
                performance, reliability, and clean design principles.
              </p>
            </div>
            <div>
              <h5>UX/UI Design</h5>
              <p>
                Designing intuitive, user-centered digital experiences that
                prioritize usability and aesthetics.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3>Get in Touch</h3>
          <p>
            Have a question, suggestion, or just want to say hello? I&apos;d love to
            hear from you! Reach out via
            <Link href="/page/contact" className="underline px-2">
              Contact
            </Link>
            or drop us a message on :
          </p>
          <div className="flex items-center gap-x-3">
            {socialLinks.map((object, key) => (
              <Link
                href={object.link}
                className="size-9 flex items-center justify-center hover:text-zinc-500 duration-300 border rounded-sm"
                key={key}
              >
                {object.icon}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default page;
