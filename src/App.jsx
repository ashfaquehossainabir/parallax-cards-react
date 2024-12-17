// Modules
import React from "react"

//Components
import Cards from "./components/Cards"

// Image Sources
import image1 from "./images/img-1.jpg"
import image2 from "./images/img-2.jpg"
import image3 from "./images/img-3.jpg"
import image4 from "./images/img-4.jpg"

function App() {

  const data = [
    {
      image: image1,
      heading: "Devil in Heaven",
      subheading: "Rise Of The Cult Leader"
    },
    {
      image: image2,
      heading: "Shadows of Eternity",
      subheading: "Whispers in the Dark"
    },
    {
      image: image3,
      heading: "Midnight Echoes",
      subheading: "Secrets Unbound"
    },
    {
      image: image4,
      heading: "Crimson Horizons",
      subheading: "Beyond the Veil"
    }
  ]


  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-4 h-screen w-screen">
        {
          data.map((eachData, index) => (
            <Cards key={ index } { ...eachData }></Cards>
          ))
        }
      </div>
    </>
  )
}

export default App