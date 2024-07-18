import { useNavigate } from "react-router-dom";

export default function CategoryBox({ selected, imageSrc, selectedImageSrc, title, url }) {
  const navigate = useNavigate();
  return (
    <section 
      className="flex flex-col items-center justify-center p-4 hover:opacity-50 hover:trasition-all"
      onClick={() => navigate(url)}
    >
      <img src={`${selected ? selectedImageSrc : imageSrc}`} alt={imageSrc} />
      <p className={`${selected ? 'text-orange' : 'text-text80'} text-xs`}>{title}</p>
    </section>
  );
}
