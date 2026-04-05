import { useState, useEffect } from 'react'
import { fetchPlayerImages, getBestImageUrl, type PlayerImageResult } from '@/services/playerImageService'

interface UsePlayerImageResult {
  imageUrl: string | null
  isLoading: boolean
  error: string | null
}

export function usePlayerImage(playerName: string, fallbackImage?: string): UsePlayerImageResult {
  const [imageUrl, setImageUrl] = useState<string | null>(fallbackImage || null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function loadImage() {
      setIsLoading(true)
      setError(null)

      try {
        const result: PlayerImageResult | null = await fetchPlayerImages(playerName)
        const apiImageUrl = getBestImageUrl(result)

        if (mounted) {
          setImageUrl(apiImageUrl || fallbackImage || null)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load image')
          setImageUrl(fallbackImage || null)
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    loadImage()

    return () => {
      mounted = false
    }
  }, [playerName, fallbackImage])

  return { imageUrl, isLoading, error }
}
