import Image from 'next/image'

interface GalleryImageProps {
  src: string
  alt: string
  className?: string
}

export function GalleryImage({ src, alt, className = '' }: GalleryImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
  )
}

