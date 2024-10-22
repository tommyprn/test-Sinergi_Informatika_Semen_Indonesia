import React from "react";

function Modal({ onClose, onDownload }) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-5 pb-5 pt-3">
              <h3
                className="text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Deactivate account
              </h3>

              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to
                  deactivate your account? All of
                  your data will be permanently
                  removed. This action cannot be
                  undone.
                </p>
              </div>
            </div>

            <div className="px-4 py-3 flex justify-end gap-3">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-500"
                onClick={onDownload}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
