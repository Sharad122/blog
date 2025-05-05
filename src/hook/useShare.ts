import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const useShare = (title: string) => {

  const pathname = usePathname();
  const [origin, setOrigin] = useState<string>('');

  useEffect(() => { if (typeof window !== 'undefined') setOrigin(window.location.origin) }, []);

  const shareUrl = useMemo(() => { return origin ? `${origin}${pathname}` : ''; }, [origin, pathname]);

  const encodeTitle = encodeURIComponent(title);

  const openShareWindow = (url: string) => { window.open(url, '_blank', 'noopener,noreferrer') };

  const share = {
    facebook: () => {
      const url = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}&t=${encodeTitle}`;
      openShareWindow(url);
    },
    twitter: () => {
      const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeTitle}`;
      openShareWindow(url);
    },
    linkedIn: () => {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
      openShareWindow(url);
    },
    copy: async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
      } catch (error) {
        console.error('Failed to copy: ', error);
      }
    }
  };

  return { shareUrl, share };
};

export default useShare;