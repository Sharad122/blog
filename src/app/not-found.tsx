"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";

const NotFound = () => {
  const { back } = useRouter();
  return (
    <div className="text-center pb-20 space-y-7">
      <div>
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold">Oops! Page not found</h2>
      </div>
      <div className="space-y-7">
        <p>The page you&#39;re looking for doesn&#39;t exist or has been moved.</p>
        <Button onClick={back} variant="secondary" className="inline-flex items-center">Go Back</Button>
        <Link href="/" className={buttonVariants({className:"inline-flex items-center ml-9"})}>Go Home</Link>
      </div>
    </div>
  )
};

export default NotFound;