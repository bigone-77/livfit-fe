import editSvg from "@svgs/badge/edit.svg";

const EditBadge = ({ imageSrc }) => {
  return (
    <div className="relative flex items-center justify-center rounded-full w-28 h-28 bg-text100">
      <img src={imageSrc} alt={imageSrc} />
      <img src={editSvg} alt="edit" className="absolute bottom-0 right-0" />
    </div>
  );
};

export default EditBadge;
