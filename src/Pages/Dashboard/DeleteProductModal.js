import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
const DeleteProductModal = ({
  open,
  setOpen,
  productId,
  setProductId,
  refetch,
}) => {
  const [deleteId, setDeleteId] = useState();

  //   console.log("cancle", deleteId, "product", productId);
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`https://craft-connect-server-blond.vercel.app/allProducts/${deleteId}?id=${deleteId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)

        if (data.deletedCount > 0) {
          refetch();
          //   console.log(data);
          setOpen(false);
        }
      });
  };

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Delete Product
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete your product? Your
                          product will be permanently removed. This action
                          cannot be undone after click Delete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <form
                  onSubmit={handleDelete}
                  className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setDeleteId(productId);
                      setProductId("");
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(false);
                      setProductId("");
                      setDeleteId("");
                    }}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteProductModal;
