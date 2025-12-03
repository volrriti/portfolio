"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  // { title: "Vision", href: "/vision" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex justify-center w-full py-6 absolute top-0 z-50">
      <ul className="flex gap-2 rounded-full p-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <button
              key={item.title}
              onClick={() => router.push(item.href)}
              className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                isActive ? "text-[#171717]" : "text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute inset-0 bg-white rounded-full -z-10"
                />
              )}
              {item.title}
            </button>
          );
        })}
      </ul>
    </nav>
  );
}
