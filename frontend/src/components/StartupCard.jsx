export default function StartupCard({ project, index = 0 }) {
  if (!project.photos?.length) {
    return "";
  }

  return (
    <img
      className="object-cover rounded-2xl"
      src={"http://localhost:4000/uploads/" + project.photos[index]}
      alt=""
    />
  );
}
