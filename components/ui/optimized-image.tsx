"use client"
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  objectFit = 'cover',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRobHB0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/ALtkICA="

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-400",
          className
        )}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <span className="text-4xl">🖼️</span>
      </div>
    )
  }

  const imageProps = {
    src,
    alt,
    className: cn(
      "transition-opacity duration-300",
      isLoading ? "opacity-0" : "opacity-100",
      className
    ),
    priority,
    quality,
    placeholder: placeholder as any,
    blurDataURL: blurDataURL || defaultBlurDataURL,
    onLoad: () => setIsLoading(false),
    onError: () => setHasError(true),
    sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    style: fill ? undefined : { objectFit },
    ...props
  }

  if (fill) {
    return <Image {...imageProps} fill />
  }

  return (
    <Image
      {...imageProps}
      width={width || 400}
      height={height || 300}
    />
  )
}

// Avatar component using optimized image
export function AvatarImage({ 
  src, 
  alt, 
  size = 40,
  fallback = "👤",
  className 
}: {
  src?: string
  alt?: string
  size?: number
  fallback?: string
  className?: string
}) {
  if (!src) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gray-100 rounded-full text-gray-600",
          className
        )}
        style={{ width: size, height: size }}
      >
        {fallback}
      </div>
    )
  }

  return (
    <OptimizedImage
      src={src}
      alt={alt || "Avatar"}
      width={size}
      height={size}
      className={cn("rounded-full", className)}
      objectFit="cover"
    />
  )
}