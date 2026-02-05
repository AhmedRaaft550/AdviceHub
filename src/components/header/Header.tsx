import { headerLinks } from "@/constants/headerConst";
import AnimatedBtn from "../customUi/AnimatedBtn";
import Link from "next/link";
import Logo from "../customUi/Logo";
import { HeaderConstTypes } from "@/types/app";

const Header = () => {
  const { links }: HeaderConstTypes = headerLinks;

  return (
    <header className="fixed top-4 inset-x-0 z-50 mx-auto container ">
      <div className="backdrop-blur-xl bg-white/3 border border-white/10 shadow-2xl rounded-2xl py-4 px-8 flex items-center justify-between transition-all duration-300 hover:bg-white/5">
        {" "}
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex justify-center items-center gap-8 relative">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-sm font-medium text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link href="/signup">
            <AnimatedBtn className=" px-5 py-2  text-sm  transition-all  ">
              sign up
            </AnimatedBtn>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
