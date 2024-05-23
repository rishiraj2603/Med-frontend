import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants/url";
import { Link } from "react-router-dom";

const Ocr = () => {
  const [image, setImage] = useState("");
  const [presetValue, setPresetValue] = useState("");
  const [cloudName, setCloudName] = useState("");

  const uploadHandler = async (e) => {
    e.preventDefault();
    const file = e.target.firstChild.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetValue);
    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => setImage(res.secure_url));
  };

  async function getCloudValue() {
    const res = await axios.get(`${BACKEND_URL}/uploadValue`);
    const { PRESET_NAME, CLOUD_NAME } = res.data;
    setCloudName(CLOUD_NAME);
    setPresetValue(PRESET_NAME);
  }

  async function getText() {
    const res = await axios.post(`${BACKEND_URL}/uploadText`, {
      image,
    });
    const { textData } = res.data;
    const changedText = textData.split(" ");
    setText(changedText);
  }
  useEffect(() => {
    getCloudValue();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="m-auto text-4xl">Image to text</h1>
      <form
        method="post"
        enctype="multipart/form-data"
        onSubmit={uploadHandler}
        className="flex"
      >
        <input type="file" name="avatar" size={10} className="mx-16 " />
        <button
          type="submit"
          className="h-20 p-5 text-2xl text-white rounded-full bg-cyan-500 w-fit"
        >
          Upload
        </button>
      </form>

      <img src={image} className="m-auto w-96 h-96" />
      <div className="flex gap-10">
        {text.map((val) => {
          return (
            <Link
              to={`/search/?medicineName=${val}`}
              className="h-10 p-10 m-auto text-white bg-green-300 rounded-full w-fit place-content-center "
            >
              {val}
            </Link>
          );
        })}
      </div>
      <button
        onClick={getText}
        className="p-5 m-5 text-white bg-blue-500 rounded-full"
      >
        {" "}
        Change To Text
      </button>
    </div>
  );
};

export default Ocr;
