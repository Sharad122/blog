"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import Search from "../parts/search-form";
import { SearchIcon } from "lucide-react";
import { HamburgerMenuIcon } from "@/lib/icons";
import { Cross1Icon, DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const navLinks = [
  {desktop:"about", smartphone:"about", link :"/page/about"}, 
  {desktop:"blog", smartphone:"blog", link :"/blog"}, 
  {desktop:"contact", smartphone:"contact", link :"/page/contact"}, 
  {desktop:"terms", smartphone:"terms", link :"/page/terms"}, 
  {desktop:"privacy", smartphone:"privacy policy", link :"/page/privacy-policy"}, 
];

const Header = () => {

  const { setTheme } = useTheme();
  const [search, setSearch] = useState<boolean>();

  return (
    <header className="sticky top-0 left-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {!search ?
      <nav className="container h-[55px] flex items-center justify-between text-sm gap-6 sm:gap-9 lg:gap-0">
        <div className="h-full flex items-center flex-1 space-x-3 sm:space-x-16">
            <Link href="/" className="text-[22px] font-medium tracking-wider">WebHelp</Link>
            <div className="h-full hidden lg:flex items-center dark:text-[#a8a8a8] capitalize tracking-wide space-x-6">
              {navLinks.map((menu, key:number) => <Link href={`${menu.link}`} key={key} className="hover:text-neutral-600 dark:hover:text-white">{menu.desktop}</Link>)}
            </div>
        </div>
        <div className="h-full flex items-center gap-x-5 sm:gap-x-6 xl:gap-x-9">
        <Button variant="none" size="icon" type="button" onClick={() => setSearch((prev) => !prev)} className="sm:hidden"><SearchIcon className="h-5 w-5" /></Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="none"><SunIcon className="dark:hidden h-[1.2rem] w-[1.2rem]" /><MoonIcon className="hidden dark:block h-[1.2rem] w-[1.2rem]" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-[5px]">
              <DropdownMenuItem className="gap-3" onClick={() => setTheme("light")}><SunIcon className="w-4 h-4" />Light</DropdownMenuItem>
              <DropdownMenuItem className="gap-3" onClick={() => setTheme("dark")}><MoonIcon className="w-4 h-4" />Dark</DropdownMenuItem>
              <DropdownMenuItem className="gap-3" onClick={() => setTheme("system")}><DesktopIcon className="w-4 h-4" />System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Search className="w-[230px] hidden sm:flex"/>
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild><Button size="icon" variant="none"><HamburgerMenuIcon /></Button></SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-[20px] text-left font-bold mb-10 tracking-wider">WebHelp</SheetTitle>
                  <div className="capitalize space-y-5">
                    {navLinks.map((menu, index: number) => <SheetClose key={index} asChild><Link className="flex py-1.5" href={`${menu.link}`}>{menu.smartphone}</Link></SheetClose> )}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      :
      <div className="h-[55px] px-4 flex items-center justify-between space-x-6">
        <Search className="flex-1" />
        <Button variant="none" size="icon" type="button" onClick={() => setSearch((prev) => !prev)}><Cross1Icon className="w-[18px] h-[18px]" /></Button>
      </div>
      }
    </header>
  )
}

export default Header;
