// https://www.npmjs.com/package/react-image-gallery
import ImageGallery from "react-image-gallery";
import ST from "./styles";

// should probablby update fallback photo
// at minimum I need to make it somewhat smaller in size
const defaultImages = [
  {
    original: "/img/no_image.png",
    thumbnail: "/img/no_image.png",
  },
];

interface ProkatGalleryProps {
  images: any[]; // Should ideally be an array of objects with specific shape
}

const ProkatGallery = ({ images }: ProkatGalleryProps) => {
  let singleImage;

  if (!images.length) {
    images = defaultImages;
  }

  if (images.length === 1) {
    singleImage = true;
  }

  // onErrorImageURL didn't work locally.
  // see this https://github.com/xiaolin/react-image-gallery/issues/479
  return (
    <ST.GalleryWrapper>
      <ImageGallery
        items={images}
        showThumbnails={!singleImage}
        showNav={!singleImage}
        showFullscreenButton={false}
        showPlayButton={false}
        onErrorImageURL={"/img/no_image.png"}
      />
    </ST.GalleryWrapper>
  );
};

export default ProkatGallery;
