import React, { forwardRef } from 'react'
import "../App.css"

interface SectionProps{
    children: React.ReactNode
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ children }, ref) => {    
    return (
        <div ref={ref} className={"section"}>
        {children}
        </div>
    );
  });

export default Section