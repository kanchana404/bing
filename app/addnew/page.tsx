'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

const NewPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files as FileList);
    setPhotos((prevPhotos) => [...prevPhotos, ...files]);
    const previews = files.map(file => URL.createObjectURL(file));
    setPhotoPreviews((prevPreviews) => [...prevPreviews, ...previews]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Post submitted!");
    // Clear the form after submission
    setTitle("");
    setDescription("");
    setPhotos([]);
    setPhotoPreviews([]);
  };

  return (
    <div className="max-w-lg mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <Textarea
            value={description}
            onChange={handleDescriptionChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          ></Textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Photos</label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
            className="mt-1 block w-full"
            required
          />
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photoPreviews.map((preview, index) => (
              <Image
                key={index}
                src={preview}
                alt={`Photo Preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-md border border-gray-300"
                width={96}
                height={96}
              />
            ))}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
