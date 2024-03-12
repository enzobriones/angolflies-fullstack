import { logoFont } from "@/config/fonts"
import { InstagramLogoIcon } from "@radix-ui/react-icons"

export const Footer = () => {
  return (
    <div className="flex justify-center items-center sticky top-[100vh] mb-10 mt-5">
      <div className="flex-col items-center">
        <p className="text-xs flex items-center gap-x-1"><span className={`${logoFont.className}`}>AngolFlies</span> | Araucanía ©️ {new Date().getFullYear()} Todos los derechos reservados</p>
        <div className="flex items-center justify-center gap-x-2 mt-2 text-xs">
          <InstagramLogoIcon className="w-4 h-4" />
          @angolfliesaraucania
        </div>
      </div>
    </div>
  )
}
