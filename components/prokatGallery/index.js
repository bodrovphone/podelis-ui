// https://www.npmjs.com/package/react-image-gallery
import ImageGallery from "react-image-gallery";
import ST from "./styles";

// in production images will be passed from a page query if parameter.
// I need to add logic to grab 5 images if exists and if there is 0 image, then we should just show a placeholder.
const fallbackImages = [
  {
    original: "https://i1.foxtrot.com.ua/product/MediumImages/6551725_0.jpg",
    thumbnail:
      "https://i.xiaomi.ua/u/CatalogueImage/pv_xiaomi-mi-smart-compact-projector-120-001297391580382221.jpg",
  },
  {
    original:
      "https://i.xiaomi.ua/u/CatalogueImage/xiaomi-mi-smart-compact-projector-120-002297391580382222.jpg",
    thumbnail:
      "https://i.xiaomi.ua/u/CatalogueImage/pv_xiaomi-mi-smart-compact-projector-120-002297391580382222.jpg",
  },
  {
    original:
      "https://i.xiaomi.ua/u/CatalogueImage/pvm_xiaomi-mi-smart-compact-projector-120-003i297391580382223.jpg",
    thumbnail:
      "https://i.xiaomi.ua/u/CatalogueImage/pv_xiaomi-mi-smart-compact-projector-120-003i297391580382223.jpg",
  },
];

const ProkatGallery = (props) => {
  const { images = fallbackImages } = props;
  return (
    <ST.GalleryWrapper>
      <ImageGallery {...props} items={images} />
    </ST.GalleryWrapper>
  );
};

export default ProkatGallery;
