import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils";

export function Notification() {
  const [notification, setNotification] = useState([
    {
      id: "a",
      show: true,
      type: "success",
      header: "alert 1",
      content: "hooooooo",
    },
    {
      id: "a",
      show: true,
      type: "error",
      header: "alert 2 ",
      content: "hehe",
    },
  ]);

  const addNotification = (index) => {
    notification.push({
      id: "a",
      show: true,
      type: "error",
      header: "alert 2 ",
      content: "hehe",
    });
    setNotification([...notification]);
  };

  const hideNotification = (index) => {
    notification[index].show = false;
    setNotification([...notification]);
  };

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end z-20 px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-3 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          {notification.map((notif, index) => (
            <Transition
              show={notif.show}
              as={Fragment}
              key={index}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                id={notif.id}
                className="transition-all max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className={classNames(
                          notif.type === "success"
                            ? "text-green-400"
                            : "text-red-400",
                          "h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">
                        {notif.header}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {notif.content}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                        onClick={() => {
                          hideNotification(index);
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </>
  );
}
