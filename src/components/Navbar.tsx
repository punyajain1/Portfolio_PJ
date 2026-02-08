'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isPathActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = isPathActive(href);
    return (
      <Link href={href} className="!min-h-0 !min-w-0">
        <div className="cursor-pointer font-sans">
          <section className="flex flex-col gap-4 border-t border-transparent">
            <h2 className="">
              <span
                className={`group relative inline-block cursor-pointer transition-colors duration-500 text-md font-medium hover:text-black dark:hover:text-white ${active ? 'text-black dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                  }`}
              >
                {children}
                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-bottom-right scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:origin-bottom-left group-hover:scale-x-100" aria-hidden="true"></span>
              </span>
            </h2>
          </section>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex items-center justify-between gap-4 py-2 sm:py-3 sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      {/* Navigation Links */}
      <div className="flex items-center justify-start gap-3 sm:gap-4 text-sm sm:text-base">
        <NavLink href="/">home</NavLink>
        <NavLink href="/#projects">projects</NavLink>
        <NavLink href="/#stack">skills</NavLink>
        <NavLink href="/#contact">contact</NavLink>
      </div>
    </div>
  );
};


export default Navbar;
