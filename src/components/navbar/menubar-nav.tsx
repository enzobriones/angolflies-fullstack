import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const MenubarNav = () => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <HamburgerMenuIcon />
            <MenubarContent className="sm:hidden mr-2">
              <MenubarItem>
                <Link href="/">Inicio</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/products">Productos</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/contact">Contacto</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
