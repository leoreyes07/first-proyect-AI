import { usePlayerImage } from '@/hooks/usePlayerImage'

interface PlayerImageProps {
  name: string
  fallbackImage: string
  className?: string
  alt?: string
}

export function PlayerImage({ name, fallbackImage, className, alt }: PlayerImageProps) {
  const { imageUrl } = usePlayerImage(name, fallbackImage)
  
  return (
    <img
      src={imageUrl || fallbackImage}
      alt={alt || name}
      className={className}
    />
  )
}
