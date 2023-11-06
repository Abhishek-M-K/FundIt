import { useState } from "react";

export default function ProjectPhoto({ project }) {
  return (
    <div>
      {project.photos?.[0] && (
        <div className="flex w-full ">
          <img
            src={"http://localhost:4000/uploads/" + project.photos[0]}
            alt="Logo"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
