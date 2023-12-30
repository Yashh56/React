import React from 'react'

const Card = (props) => {
  return (
    <>
    
  <div className="relative h-[400px] w-[300px] rounded-md mt-4">
  <img
    src={props.image}
    // src="https://e0.pxfuel.com/wallpapers/396/216/desktop-wallpaper-zoro-art-organism.jpg"    
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{props.username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
      View Profile →
    </button>
  </div>
</div>

    </>
  )
}

export default Card