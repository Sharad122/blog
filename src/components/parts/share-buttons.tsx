"use client";
import { Button } from "../ui/button";
import useShare from "@/hook/useShare";
import { FacebookIcon, TwitterIcon } from "@/lib/icons";
import { Link2Icon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const ShareButtons = ( { title } : { title : string } ) => {

  const { share } = useShare(title);

  return (
    <div className="flex items-center gap-x-3">
      <Button onClick={share.facebook} variant="none" className="p-2"><FacebookIcon /></Button>
      <Button onClick={share.twitter} variant="none" className="p-2"><TwitterIcon /></Button>
      <Button onClick={share.linkedIn} variant="none" className="p-2"><LinkedInLogoIcon className="size-[19px]" /></Button>
      <Button onClick={share.copy} variant="none" className="p-2"><Link2Icon className="size-5 mt-0.5" /></Button>
    </div>
  );
};

export default ShareButtons;
