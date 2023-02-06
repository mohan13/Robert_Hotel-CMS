import {
  BiHome,
  BiCategory,
  BiFile,
  BiTable,
  BiMessageRoundedError,
} from "react-icons/bi";
export const NavData = [
  // {
  //   icon: <BiHome className="w-full h-full" />,
  //   title: "HOME",
  //   path: "/Home/Home",
  // },
  {
    icon: <BiTable className="w-full h-full" />,
    title: "DASHBOARD",
    path: "/Table",
  },
  {
    icon: <BiFile className="w-full h-full" />,
    title: "form",
    path: "/another-form",
  },
  {
    icon: <BiCategory className="w-full h-full" />,
    title: "CATEGORY",
    pis: "category",
    submenu: [
      {
        title: "HOME",
        id: "category",
        path: "/Home/Home?from=category",
      },
      {
        title: "ABOUT",
        id: "about",
        path: "/About?from=about",
      },
      {
        title: "TESTIMONIALS",
        id: "category",
        path: "/Testimonials?from=category",
      },
      // {
      //   title: "For Multiple Images",
      //   id: "category",
      //   path: "/Images?from=category",
      // },
      {
        title: "BLOGS",
        id: "blogs",
        path: "/Blogs?from=blogs",
      },
    ],
    // path: "",
  },
  {
    icon: <BiMessageRoundedError className="w-full h-full" />,
    title: "ABOUT",
    path: "/About",
  },
];
