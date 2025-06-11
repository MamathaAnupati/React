import React from 'react'

export default function Card({username='MV'}) {
  //console.log(props);
  return (
   <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://supersimple.dev/exercises/youtube/thumbnails/thumbnail-2.webp" />
  </div>
  <div className="flex">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">{username}</span>
    <span className="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

