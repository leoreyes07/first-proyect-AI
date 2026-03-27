import { type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
}

export function Avatar({ className, size = 'md', fallback, src, alt, ...props }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  }

  return (
    <div className={cn('relative inline-flex items-center justify-center rounded-full bg-primary-100 overflow-hidden', sizes[size], className)}>
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className="w-full h-full object-cover" {...props} />
      ) : (
        <span className="font-medium text-primary-700">{fallback || '?'}</span>
      )}
    </div>
  )
}
