'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function MyImage({ src, placeholderImage, className, alt, height, width, ...rest }) {
  const [url, setUrl] = useState(src)

  useEffect(() => {
    setUrl(src)
  }, [src])

  function getUrl() {
    if (url) return url
  }

  return (
    <Image
      className={className}
      src={getUrl()}
      height={height}
      width={width}
      quality={50}
      alt={alt || ''}
      onError={() => setUrl('')}
      {...rest}
    />
  )
}
export default React.memo(MyImage)
