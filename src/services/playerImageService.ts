interface TheSportsDBPlayer {
  idPlayer: string
  strPlayer: string
  strTeam: string
  strThumb: string | null
  strCutout: string | null
  strRender: string | null
  strNationality: string
  dateBorn: string
  strPosition: string
}

export interface PlayerImageResult {
  thumb: string | null
  cutout: string | null
  render: string | null
}

const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3'
const imageCache = new Map<string, PlayerImageResult>()

export async function fetchPlayerImages(playerName: string): Promise<PlayerImageResult | null> {
  if (imageCache.has(playerName)) {
    return imageCache.get(playerName)!
  }

  try {
    const response = await fetch(`${API_BASE}/searchplayers.php?p=${encodeURIComponent(playerName)}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.player && data.player.length > 0) {
      const player = data.player[0] as TheSportsDBPlayer
      const result: PlayerImageResult = {
        thumb: player.strThumb,
        cutout: player.strCutout,
        render: player.strRender,
      }
      imageCache.set(playerName, result)
      return result
    }

    imageCache.set(playerName, { thumb: null, cutout: null, render: null })
    return null
  } catch (error) {
    console.error(`Failed to fetch player image for ${playerName}:`, error)
    return null
  }
}

export async function fetchMultiplePlayerImages(
  playerNames: string[]
): Promise<Map<string, PlayerImageResult>> {
  const results = new Map<string, PlayerImageResult>()

  await Promise.all(
    playerNames.map(async (name) => {
      const result = await fetchPlayerImages(name)
      if (result) {
        results.set(name, result)
      }
    })
  )

  return results
}

export function getBestImageUrl(result: PlayerImageResult | null): string | null {
  if (!result) return null
  return result.thumb || result.cutout || result.render || null
}
