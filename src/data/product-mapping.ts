export const productImageMapping: Record<string, string[]> = {
  '1': [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    'https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?w=600',
    'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600',
  ],
  '2': [
    'https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?w=600',
    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600',
  ],
  '3': [
    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600',
    'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=600',
  ],
  '4': [
    'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600',
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600',
  ],
  '5': [
    'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
  ],
  '6': [
    'https://images.unsplash.com/photo-1625910513413-5fc4ec3c8f03?w=600',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
  ],
  '7': [
    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600',
    'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600',
  ],
  '8': [
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
    'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600',
  ],
  '9': [
    'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600',
    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
  ],
  '10': [
    'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600',
    'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600',
  ],
  '11': [
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600',
    'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600',
  ],
  '12': [
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
    'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600',
  ],
  '13': [
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
  ],
  '14': [
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600',
  ],
  '15': [
    'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600',
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600',
  ],
  '16': [
    'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600',
    'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=600',
  ],
  '17': [
    'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600',
    'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600',
  ],
  '18': [
    'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600',
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
  ],
  '19': [
    'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600',
    'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600',
  ],
  '20': [
    'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600',
    'https://images.unsplash.com/photo-1624913503273-5f9c4fd25f4c?w=600',
  ],
}

export function getProductImages(productId: string): string[] {
  return productImageMapping[productId] || []
}

export function getProductMainImage(productId: string): string | undefined {
  const images = productImageMapping[productId]
  return images?.[0]
}
