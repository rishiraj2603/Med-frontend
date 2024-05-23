import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants/url";

const Ocr = () => {
  const [text, setText] = useState([]);
  const [image, setImage] = useState("");
  const [presetValue, setPresetValue] = useState("");
  const [cloudName, setCloudName] = useState("");
  const [token, setToken] = useState("");

  //   console.log("🚀 ~ Ocr ~ text:", text);
  const uploadHandler = async (e) => {
    e.preventDefault();
    console.log("preventdefaul kai niche");
    console.log(e);
    const file = e.target.firstChild.files[0];
    console.log("🚀 ~ uploadHandler ~ file:", file);
    const formData = new FormData();
    formData.append("ImageName", file);
    formData.append("Upload_preset", presetValue);
    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "post",
      body: formData,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json)
      .then((data) => console.log("inside fetch", data));
    // .then((res) => setImage(res.data.secure_url));
    console.log("got the data");
  };
  async function getText() {
    console.log("inside got text");
    const res = await axios.post(`${BACKEND_URL}/upload`, {});
    const { PRESET_NAME, CLOUD_API_KEY, CLOUD_NAME } = res.data;
    console.log("i got data");
    // setText(textData);
    setCloudName(CLOUD_NAME);
    setToken(CLOUD_API_KEY);
    setPresetValue(PRESET_NAME);
  }

  useEffect(() => {
    getText();
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
    </div>
  );
};

export default Ocr;
