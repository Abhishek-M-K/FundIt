export default function StartupCard({ project, index = 0 }) {
  if (!project.photos?.length) {
    return "";
  }

  return (
    <img
      className="object-cover rounded-2xl"
      src={
        "https://backendfundit.onrender.com/uploads/" + project.photos[index]
      }
      alt=""
    />
  );
}
