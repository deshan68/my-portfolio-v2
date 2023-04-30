import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaStackOverflow,
  FaGithub,
} from "react-icons/fa";
import { db, auth, storage } from "./config/firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import dp1 from "./assets/dp1.jpg";
import Spinner from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

const items = [
  {
    title: "Chat App",
    description:
      "This is a real-time chat app built with React Native, Firebase and Firestore.",
    sourceCodeUrl: "",
    categories: ["EXPO1", "REACT1", "WEB1"],
  },
  {
    title: "Chat App",
    description:
      "This is a real-time chat app built with React Native, Firebase and Firestore.",
    sourceCodeUrl: "",
    categories: ["EXPO", "REACT", "WEB"],
  },
];

const navIcons = [
  {
    name: <FaInstagram size={20} />,
    href: "https://instagram.com/arun_6.8?igshid=YmMyMTA2M2Y=",
  },
  {
    name: <FaLinkedinIn size={20} />,
    href: "https://www.linkedin.com/in/arun-deshan-936914203/",
  },
  {
    name: <FaFacebook size={20} />,
    href: "https://www.facebook.com/arun.deshan?mibextid=LQQJ4d",
  },
  {
    name: <FaTwitter size={20} />,
    href: "https://twitter.com/DeshanGaa",
  },
  {
    name: <FaStackOverflow size={20} />,
    href: "https://stackoverflow.com/users/20976298/arun-deshan?tab=profile",
  },
  { name: <FaGithub size={20} />, href: "https://github.com/DESHAN68" },
];

function App() {
  const [projectList, setprojectList] = useState([]);
  const projectCollection = collection(db, "files");
  const [isLoading, setIsloading] = useState(false);

  const getProjectList = async () => {
    //read the data
    //set the project list
    setIsloading(true);
    try {
      const data = await getDocs(projectCollection);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setprojectList(filterData);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <div className="min-h-full">
      <>
        <Disclosure
          as="nav"
          className="sticky top-0 z-10 backdrop-blur-sm bg-lightGreen/80 "
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <span className="font-bold text-base">developByArun</span>
                    </div>
                  </div>
                  <div className="absolute gap-5 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navIcons.map((item) => (
                          <button type="button" className="" key={item.name}>
                            <a href={item.href} target="_blank">
                              {item.name}
                            </a>
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="border-2 border-white border-solid rounded-md px-4 py-1 "
                    >
                      <span className="">Resume</span>
                    </button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 justify-center flex flex-col items-center ">
                  {navIcons.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={
                        (item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium")
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </>

      <main className="shadow bg-gradient-to-b from-darkgreen to-darkPurple h-full">
        <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 flex pt-10">
          <div className="w-2/3 gap-4 flex flex-col pr-2">
            <div className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight w-3/4">
              Providing my <span className="text-textPurple">best</span> as a
              developer
            </div>
            <div className="text-base md:text-xl tracking-tight">
              All the best and most modern resources at your fingertips. Access
              online projects, coding examples. All in one place
            </div>
          </div>
          <div className="flex justify-end w-1/3 ">
            <div className="rounded-3xl w-32 h-32 relative overflow-hidden  md:h-60 md:w-60 lg:h-96 lg:w-96">
              <img src={dp1} className="" />
            </div>
          </div>
        </div>
      </main>
      <section className="shadow bg-darkPurple h-fit pb-20">
        <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 flex flex-col gap-5">
          <div className="text-xl md:text-4xl font-bold tracking-tight">
            Projects
          </div>
          {!isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {projectList.map((item) => (
                <div
                  key={item.sourceCodeUrl}
                  className=" bg-cardPurple rounded-xl  border-solid drop-shadow-2xl p-3 w-full flex flex-col justify-around "
                >
                  <div className="overflow-hidden rounded-xl bg-dark flex ">
                    <img
                      src={item.imageUrl}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="text-xl text-center font-bold tracking-tight mt-2">
                    {item.title}
                  </div>
                  <div className="text-base text-center  tracking-tight text-gray">
                    {item.description}
                  </div>
                  <div className="flex justify-center gap-2 my-2">
                    <ol className="">
                      {item.categories.map((cat) => (
                        <li
                          key={cat}
                          className="bg-textPurple w-fit rounded-md px-3 py-1 text-xs float-left mx-1"
                        >
                          {cat}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex justify-between gap-2 ">
                    <a
                      target="_blank"
                      href={item.repoLink}
                      className="bg-dark w-full py-2 text-center rounded-md font-bold hover:cursor-pointer"
                    >
                      <div>Source Cdoe</div>
                    </a>
                    <a
                      target="_blank"
                      href={item.hostLink}
                      className="bg-dark w-full py-2 text-center rounded-md font-bold hover:cursor-pointer"
                    >
                      <div>Preview</div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Spinner className="self-center" />
          )}
        </div>
      </section>

      <footer className=" bg-dark py-16">
        <div className=" max-w-7xl px-4  flex flex-col text-center text-sm font-light">
          Copyright @ 2023 developByArun Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
