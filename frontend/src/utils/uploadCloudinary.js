const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", "lawyer-app");
  uploadData.append("cloud_name", "dr6kdnioz");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dr6kdnioz/image/upload",
    {
      method: "post",
      body: uploadData,
    }
  );

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
