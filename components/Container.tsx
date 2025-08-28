import React from 'react'
interface ContainerProps{
    children: React.ReactNode,
}
const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="w-[85%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[85%] mx-auto">
        {children}
    </div>
  )
}

export default Container