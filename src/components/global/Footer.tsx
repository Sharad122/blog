"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-between gap-y-6 py-[18px] flex-col-reverse sm:flex-row">
        <p className="text-[13px] l3">Copyright © 2025 <b className="tracking-wider pl-1 l2">WebHelp</b></p>
        <ul className="flex items-center gap-x-3 sm:gap-x-5 text-[11px] uppercase">
          <Link href="/page/about" className="ll3">about</Link>
          <Link href="/page/contact" className="ll3">contact</Link>
          <Link href="/page/privacy-policy" className="ll3">privacy policy</Link>
          <Link href="/page/terms" className="ll3">terms</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;