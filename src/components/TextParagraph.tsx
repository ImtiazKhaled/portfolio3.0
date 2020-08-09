import React, { useState, useEffect } from 'react'

const TextParagraph = (props: TextParagraphProps) => {

    var [ displayText, setDisplayText ] = useState('')
    var [ loading, setLoading ] = useState(false)

    useEffect(() : void => {
        
        setLoading(true)
        var text = props.text

        if(props.links) 
            props.links.forEach( (link): void => {
                var splitText = text.split(link.linkText)
                var prependTag = `<a className='links' href='${link.link}'><span>`
                var appendTag = '</span></a>'
                var textWithLink = splitText[0] + 
                prependTag + link.linkText + appendTag  
                + splitText[1]
                text = textWithLink
                return
            })

        setDisplayText(text)
        setLoading(false)
        
        return 

    }, [props]);

    const RenderText = () => {
        switch(props.type) {
            case 'paragraph':
                return <div className='paragraphs' dangerouslySetInnerHTML={{__html: displayText}} />
            case 'list':
                return <span className='paragraphs' dangerouslySetInnerHTML={{__html: displayText}} />
            default:
                return <div className='paragraphs' dangerouslySetInnerHTML={{__html: displayText}} />
        } 
    }

    return loading ? <div/> : <RenderText />
    
}

export default TextParagraph