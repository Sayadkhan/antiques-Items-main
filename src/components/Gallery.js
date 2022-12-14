import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "https://m.media-amazon.com/images/I/617Y62DU8tL._SL1036_.jpg",
    title: "Antique Telephone ca 1910",
    category: "Telephone",
  },
  {
    id: 2,
    src: "https://s.alicdn.com/@sc04/kf/H1b2f993827e64106b16bb3312aa8cfd1i.jpg",
    title: "Kerosene Hurricane Lamp ",
    category: "Hurricane",
  },
  {
    id: 3,
    src: "https://artblart.files.wordpress.com/2019/12/august-semmendinger-mammoth.jpg",
    title: "Antique Vintage Look Flim Camera",
    category: "Camera",
  },
  {
    id: 4,
    src: "https://i.ebayimg.com/images/g/exgAAOSwXx5gjRm8/s-l1600.jpg",
    title: "Vintage Wrought Iron Isolated",
    category: "Iron",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
