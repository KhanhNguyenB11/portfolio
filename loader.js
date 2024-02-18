'use client'
const externalHost = ["cdn-icons-png.flaticon.com", "upload.wikimedia.org", "w7.pngwing.com", "images.pexels.com"]
export default function myImageLoader({ src, width, quality }) {
  // Check if src starts with any of the external hosts
  const isExternal = externalHost.some(host => src.startsWith(`https://${host}`) || src.startsWith(`http://${host}`));
  if (isExternal) {
      return src; // Return the src URL as is if it starts with any of the external hosts
  } else {
      // Modify the src URL by adding width and quality parameters
      return `https://khanhnguyen-pi.vercel.app/${src}?w=${width}&q=${quality || 75}`;
  }
}