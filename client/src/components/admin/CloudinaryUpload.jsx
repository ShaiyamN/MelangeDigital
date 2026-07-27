import React, { useState } from "react";
import { Upload, X, Check, Loader2 } from "lucide-react";

const CloudinaryUpload = ({ onUploadSuccess, currentImageUrl, label = "Upload Image" }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [preview, setPreview] = useState(currentImageUrl || "");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate configuration
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      setError("Cloudinary cloud name or upload preset is missing in .env configuration.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setPreview(data.secure_url);
      onUploadSuccess(data.secure_url);
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      setError("Failed to upload image. Make sure your upload preset is configured as 'Unsigned'.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPreview("");
    onUploadSuccess("");
  };

  return (
    <div className="w-full font-bricolage">
      <span className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">{label}</span>
      
      {preview ? (
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group aspect-video max-w-sm bg-slate-50 dark:bg-white/5 shadow-sm">
          <img src={preview} alt="Upload preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
            <button
              type="button"
              onClick={handleClear}
              className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full max-w-sm aspect-video rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 bg-slate-50 dark:bg-white/2 hover:bg-slate-100/50 dark:hover:bg-white/5 cursor-pointer transition-all group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
            {loading ? (
              <>
                <Loader2 className="w-10 h-10 text-purple-600 animate-spin mb-3" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Uploading to CDN...</p>
              </>
            ) : (
              <>
                <Upload className="w-10 h-10 text-slate-400 dark:text-slate-500 group-hover:text-purple-600 transition-colors mb-3" />
                <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-1">Click to upload image</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">PNG, JPG, JPEG, SVG or WebP</p>
              </>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
            disabled={loading}
          />
        </label>
      )}

      {error && (
        <p className="text-red-500 text-xs mt-2 leading-relaxed max-w-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default CloudinaryUpload;
