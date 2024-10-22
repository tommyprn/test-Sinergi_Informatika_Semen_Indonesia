"use client";
import React, { useState } from "react";
import { usePDF } from "react-to-pdf";
import axios from "axios";

import Modal from "./component/modal";

function page() {
  const [file, setFile] = useState();
  const [modal, setModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const [convertPdf, setConvertPdf] = useState(
    {}
  );

  const { toPDF, targetRef } = usePDF({
    filename: "test.pdf",
  });

  const onChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url =
      "http://localhost:8080/api/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        if (response.status === 200) {
          setFileName(response.data.originalname);
          setModal(true);
        } else {
          throw new Error(
            "fail to upload file please check your file again or try again later"
          );
        }
      });
  };

  const onClose = () => {
    setModal(false);
    setConvertPdf({});
  };

  const onDownload = (event) => {
    event.preventDefault();
    const url = `http://localhost:8080/api/uploadFile/${fileName}`;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .get(url, null, config)
      .then((response) => {
        if (response.status === 200) {
          setConvertPdf(response.data);
          setTimeout(() => {
            toPDF();
            onClose();
          }, [1000]);
        } else {
          throw new Error(
            "fail to retrieve data from server"
          );
        }
      });
  };

  return (
    <div>
      <section>
        <h1>
          Bukti potong pajak pembelian barang
        </h1>
      </section>

      <section>
        <div>
          <div className="button-wrap">
            <label
              htmlFor="file-upload"
              className="custom-file-upload"
            >
              upload
            </label>
            <input
              id="file-upload"
              type="file"
              accept="application/pdf"
              onChange={onChange}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!file}
              className="submit-button"
            >
              submit
            </button>
          </div>

          <p className="file-name">
            {file?.name}
          </p>
        </div>
      </section>

      <section
        ref={targetRef}
        className="flex flex-col p-8 gap-6"
      >
        <div>
          <p className="text-lg text-bold">
            {convertPdf.z}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.a}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.b}
          </p>
        </div>

        <div>
          <p className="text-lg text-bold">
            {convertPdf.c}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.d}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.e}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.f}
          </p>
        </div>

        <div>
          <p className="text-lg text-bold">
            {convertPdf.g}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.h}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.i}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.j}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.k}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.l}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.m}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.n}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.o}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.p}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.q}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.r}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.s}
          </p>
        </div>

        <div>
          <p className="text-lg text-bold">
            {convertPdf.t}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.u}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.v}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.w}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.x}
          </p>
          <p className="ml-4 text-sm">
            {convertPdf.w}
          </p>
        </div>
      </section>

      {modal && (
        <Modal
          onClose={onClose}
          onDownload={onDownload}
        />
      )}
    </div>
  );
}

export default page;
