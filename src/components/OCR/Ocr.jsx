import React, { useEffect, useState } from "react";
import axios from "axios";

const Ocr = () => {
  const [text, setText] = useState([]);
  const [image, setImage] = useState();
  //   console.log("🚀 ~ Ocr ~ text:", text);
  const uploadHandler = async (e) => {
    e.preventDefault();
    console.log("preventdefaul kai niche");
    console.log(e);
    const file = e.target.firstChild.files[0];
    console.log("🚀 ~ uploadHandler ~ file:", file);
    const formData = new FormData();
    formData.append("ImageName", file);
    formData.append("Upload_preset", "medLifeImage");
    fetch("https://api.cloudinary.com/v1_1/dseheonv2/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json)
      .then((data) => console.log("inside fetch", data));
    // .then((res) => setImage(res.data.secure_url));
    console.log("got the data");
  };
  //   async function getText() {
  //     const res = await axios.post(`http://localhost:4000/upload`, {});
  //     const { textData } = res.data;
  //     setText(textData);
  //   }

  //   useEffect(() => {
  //     getText();
  //   }, []);

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
