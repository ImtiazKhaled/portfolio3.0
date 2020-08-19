import React, { useState, useRef } from 'react'


const Picture = (props: PictureProps) => {

    const FaceNormal = props.face
    const FaceHover = props.face_hover
    const FaceClick = props.face_click
    const FaceClickExtra = props.face_click_extra

    var faceRef = useRef<HTMLImageElement>(null)
    var [ DisplayPicture, SetDisplayPicture ] = useState(FaceNormal)
    var [ NumClicked, IncrementClick ] = useState(0)
    var [ InCoolDown, UpdateCoolDown ] = useState(false)

    const isMobileDevice = ():boolean => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
    };

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
                    (`/static${currPicParsed[1]}`=== FaceClick || 
                    `/static${currPicParsed[1]}`=== FaceClickExtra) && 
                    !isMobileDevice()
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
            alt={props.alt}
        />
    </div>
}

export default Picture