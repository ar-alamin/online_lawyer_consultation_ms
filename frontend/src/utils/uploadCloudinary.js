const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();

  uploadData.append("file", file);
  uploadData.append("upload_preset", "olcms-app");
  uploadData.append("cloud_name", "dkiua9ivs");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dkiua9ivs/image/upload",
    {
      method: "post",
      body: uploadData,
    }
  );

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
