import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";
import EditIcon from "../public/edit.png"
import Image from "next/image";
// import Button from "./shared/button";

interface DialogProps {}

const Dialog = (props: any) => {
  let [isOpen, setIsOpen] = useState(false);
  const [title,setTitle]=useState(props.title);
  const [description, setDescription] = useState(props.description);


  return (
    <DialogPrimitive.Root open={isOpen}  onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger  asChild>
        {/* <button className="btn btn-info">Edit</button> */}
      <Image src={EditIcon} alt="Edit" height={30}  className=" p-1 hover:bg-blue-100 hover:rounded-md"></Image>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-white dark:bg-gray-800",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-900">
                Edit Field
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                {props.isDOI?"Edit the title & description of Double Opt-In.":"Edit the title & placeholder here."} Click save when you&apos;re
                done.
              </DialogPrimitive.Description>
              <form className="mt-2 space-y-2">
                <fieldset>
                  {/* <legend>Choose your favorite monster</legend> */}
                  <label
                  
                    className="text-xs font-medium text-gray-700 dark:text-gray-700"
                  >
                    Title
                  </label>
                  <input
                  
                    type="text"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value);console.log(title);}}
                    className={clsx(
                      "mt-1 block w-full rounded-md","bg-white p-2",
                      "text-sm text-gray-900 placeholder:text-gray-400 dark:text-gray-700 dark:placeholder:text-gray-400",
                      "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                      "focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75",
                      
                    )}
                  />
                </fieldset>
                <fieldset>
                  <label
                    
                    className="text-xs font-medium text-gray-700 dark:text-gray-700"
                  >
                    {props.isDOI?"Description":"Placeholder"}
                  </label>
                  <input
                    
                    type="text"
                    value={description}
                    onChange={(e)=>(setDescription(e.target.value))}
                    className={clsx(
                      "mt-1 block w-full rounded-md", "bg-white p-2",
                      "text-sm text-gray-700 placeholder:text-gray-400 dark:text-gray-700 dark:placeholder:text-gray-400",
                      "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                      "focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                    )}
                  />
                </fieldset>
              </form>

              <div className="mt-4 flex justify-end">
                <DialogPrimitive.Close
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:text-gray-100 dark:hover:bg-blue-600",
                    "border border-transparent",
                    "focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                  )}
                  onClick={(e)=>{
                    props.setTitle(title);
                    props.setDescription(description)
                  }}
                >
                  Save
                </DialogPrimitive.Close>
              </div>

              <DialogPrimitive.Close
                className={clsx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" onClick={()=>
                {setTitle(props.title);
                setDescription(props.description);}}
                />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export  default Dialog;