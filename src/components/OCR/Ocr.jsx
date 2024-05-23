import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants/url";

const Ocr = () => {
  const [text, setText] = useState([]);
  console.log("🚀 ~ Ocr ~ text:", text);
  const [image, setImage] = useState("");
  const [presetValue, setPresetValue] = useState("");
  const [cloudName, setCloudName] = useState("");

  const uploadHandler = async (e) => {
    e.preventDefault();
    console.log("uploadhandler");
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
    console.log("uploadhandler ending");
  };

  async function getCloudValue() {
    console.log("inside cloudval");

    const res = await axios.get(`http://localhost:4000/uploadValue`);
    const { PRESET_NAME, CLOUD_NAME } = res.data;
    setCloudName(CLOUD_NAME);
    setPresetValue(PRESET_NAME);
    console.log("end cloud val");
  }

  async function getText() {
    console.log(" inside get text");
    const res = await axios.post(`http://localhost:4000/uploadText`, {
      image,
    });
    const { textData } = res.data;
    setText(textData);
    console.log("end get text");
  }

  useEffect(() => {
    getCloudValue();
  }, []);

  return (
    <div>
      <h1>Image to text</h1>
      <form
        method="post"
        enctype="multipart/form-data"
        onSubmit={uploadHandler}
      >
        <input type="file" name="avatar" />
        <button type="submit">Convert</button>
      </form>

      <img src={image} className="w-96 h-96" />
      <button onClick={getText}> change to text</button>
    </div>
  );
};

export default Ocr;
