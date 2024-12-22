import { GalleryImage } from '@/components/gallery-image'

const galleryItems = [
  { src: "/assets/pic1.jpg", alt: "Students in a computer lab" },
  { src: "/assets/pic2.jpg", alt: "Group discussion in a classroom" },
  { src: "/assets/pic3.jpg", alt: "Campus building exterior" },
  { src: "/assets/pic4.jpg", alt: "Library interior" },
  { src: "/assets/pic5.jpg", alt: "Students during a presentation" },
  { src: "/assets/pic6.jpg", alt: "Graduation ceremony" },
]

export default function GalleryPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Our Campus Life</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Explore the vibrant atmosphere and diverse experiences at Impact Lab. Our gallery showcases the journey of skill development, innovation, and community building.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <GalleryImage
              key={index}
              src={item.src}
              alt={item.alt}
              className="aspect-[4/3] w-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

