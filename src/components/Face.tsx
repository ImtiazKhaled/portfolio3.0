import React, { useState, useRef } from 'react'
import FaceNormal from '../assets/face.png'
import FaceHover from '../assets/face_hover.png'
import FaceClick from '../assets/face_click.png'
import FaceClickExtra from '../assets/face_click_extra.png'

const Face = () => {

    var faceRef = useRef<HTMLImageElement>(null)
    var [ DisplayPicture, SetDisplayPicture ] = useState(FaceNormal)
    var [ NumClicked, IncrementClick ] = useState(0)
    var [ InCoolDown, UpdateCoolDown ] = useState(false)
    

    const handleMouseDown = () => {
        if(!InCoolDown) {
            IncrementClick(NumClicked+=1)
            NumClicked < 4 ?
                SetDisplayPicture(FaceClick) :
                SetDisplayPicture(FaceClickExtra)
        }
    }

    const handleMouseUp = async () => {
        if(!InCoolDown) {
            UpdateCoolDown(true)

            await new Promise(r => setTimeout(r, 500));
            
            if(faceRef && faceRef.current) {
                var currPicParsed : Array<String> = faceRef.current.src.split('/static')
                if(`/static${currPicParsed[1]}`=== FaceNormal)
                    SetDisplayPicture(FaceNormal)
                else if(
                    `/static${currPicParsed[1]}`=== FaceClick || 
                    `/static${currPicParsed[1]}`=== FaceClickExtra
                )
                    SetDisplayPicture(FaceHover)
                else 
                   SetDisplayPicture(FaceNormal)
            }
            else {
                SetDisplayPicture(FaceNormal)
            }

            UpdateCoolDown(false)
        }
    }

    const handleMouseEnter = () => {
        SetDisplayPicture(FaceHover)  
    }

    const handleMouseLeave = () => {
        SetDisplayPicture(FaceNormal)  
    }

    return <div>
        <img
            ref={faceRef}
            className='face'
            height={250}
            onMouseDown={() => handleMouseDown()}
            onMouseUp={() => handleMouseUp()}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}   
            src={DisplayPicture}
            alt='My Bitmoji' 
        />
    </div>
}

export default Face