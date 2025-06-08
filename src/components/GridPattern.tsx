import React from 'react'

const GridPattern = () => {
  return (
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,200,200,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,200,200,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
  )
}

export default GridPattern