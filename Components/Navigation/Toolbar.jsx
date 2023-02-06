import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { NavData } from "./NavData";
const Toolbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="mx-4">
      <AnimatePresence>
        <div className="flex md:grid justify-center gap-4">
          {NavData.map((val, i) => {
            if (val.submenu) {
              console.log(router);
              return (
                <div key={i}>
                  <div
                    className={`cursor-pointer flex mt-0 items-center ${
                      router.query.from === val.pis
                        ? "text-blue-500"
                        : " hover:text-blue-500"
                    }`}
                    onClick={() => setShowSubMenu(!showSubMenu)}
                  >
                    <div className="h-8 w-8" >
                      {val.icon}
                    </div>
                    <div className="hidden md:flex ml-2">{val.title}</div>
                  </div>
                  {showSubMenu ? (
                    <div className="ml-8 grid gap-4 mt-4">
                      {val.submenu.map((val, i) => {
                        console.log(val.path, router.pathname);
                        return (
                          <div key={i} className="block">
                            <Link href={val.path}>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={`cursor-pointer  ${
                                  router.asPath === val.path
                                    ? "text-blue-500"
                                    : " hover:text-blue-500"
                                }`}
                              >
                                {val.title}
                              </motion.div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            } else {
              return (
                <div key={i} className="cursor-pointer my-0">
                  <Link href={val.path} passHref>
                    <div
                      className={`cursor-pointer flex items-center gap-4 ${
                        router.pathname === val.path
                          ? "text-blue-500"
                          : " hover:text-blue-500"
                      }`}
                    >
                      <div className="h-8 w-8">{val.icon}</div>
                      <div className="hidden md:flex">{val.title}</div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Toolbar;
