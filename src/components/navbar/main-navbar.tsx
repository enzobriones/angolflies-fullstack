import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { MenubarNav } from "./menubar-nav";
import { LuShoppingBag } from "react-icons/lu";
import { GiFishingHook } from "react-icons/gi";
import { Badge } from "../ui/badge";
import { logoFont } from "@/config/fonts";

export const MainNavbar = () => {

  return (
    <nav className="flex justify-between items-center p-3 border-b drop-shadow-sm">
      <div className="flex items-center gap-x-1 dark:text-white">
        <Link href="/" className="flex gap-x-2 items-center">
          <h3
            className={`${logoFont.className} font-extrabold antialiased text-2xl`}
          >
            AngolFlies |
          </h3>
          <span className="font-light flex items-center gap-x-2">Araucanía <GiFishingHook size={30}/></span>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="max-sm:hidden">
          <Link href="/">
            <Button variant="link">Inicio</Button>
          </Link>
          <Link href="/products">
            <Button variant="link">Productos</Button>
          </Link>
          <Link href="/contact">
            <Button variant="link">Contacto</Button>
          </Link>
        </div>
        <div>
          <Link href="/cart">
            <div className="flex items-center gap-x-2 rounded-lg p-1.5">
              <LuShoppingBag className="w-6 h-6" />
              <Badge>0</Badge>
            </div>
          </Link>
        </div>
        <div className="sm:hidden">
          <MenubarNav />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
