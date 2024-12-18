import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[66px]">
          <div>
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </div>

          <nav className="md:flex hidden">
            <ul className="flex items-center gap-[38px]">
              <li>
                <Link href="/" className="text-white text-[17.3px] font-medium">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white text-[17.3px] font-medium">
                  Courier license
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white text-[17.3px] font-medium">
                  Media
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:flex hidden gap-2.5">
          <Button variant="ghost" className="text-white">Sign in</Button>
          <Button>Sign up</Button>
        </div>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify className="size-6 text-white" />
            </SheetTrigger>
            <SheetContent side="left">
              <nav>
                <ul className="flex flex-col gap-[38px] text-black mt-10">
                  <li>
                    <Link
                      href="/"
                      className="text-[17.3px] font-medium"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[17.3px] font-medium"
                    >
                      Courier license
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[17.3px] font-medium"
                    >
                      Media
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
