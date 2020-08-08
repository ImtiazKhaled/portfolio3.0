import React, { useState } from 'react'
import FaceNormal from '../assets/face.png'
import FaceHover from '../assets/face_hover.png'

const Face = () => {

    var [ DisplayPicture, SetDisplayPicture ] = useState(FaceNormal)

    return <div>
        <img
        height={250}
        onMouseEnter={() => SetDisplayPicture(FaceHover)}
        onMouseLeave={() => SetDisplayPicture(FaceNormal)}   
        src={DisplayPicture}
        alt="My Bitmoji" 
        />
    </div>
}

export default Face