"use client";
import { Input, Button } from "@/components/base";
import React, { useEffect, useState } from "react";
import { uploadImage } from "./actions";
export default function CreateEventForm() {
  const [file, setFile] = useState<File | null>(null);
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0] as File;
      setFile(file);
    }
  };
  const handleSubmit = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const { data, error } = await uploadImage(formData);
        if (error) {
          console.error(error);
          alert("Error uploading image");
        } else {
          alert("Image uploaded successfully");
        }
      } catch (error) {
        console.error(error);
        alert("Error uploading image");
      }
    }
  };
  return (
    <div>
      <Input type="file" onChange={handleChanges} />
      <img src={file ? URL.createObjectURL(file) : ""} alt="upload an image" />
      <Button onClick={handleSubmit}>Upload</Button>
    </div>
  );
}
