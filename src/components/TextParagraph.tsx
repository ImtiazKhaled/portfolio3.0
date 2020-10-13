import React, { useState, useEffect } from 'react'
import convert from 'htmr'

const TextParagraph = (props) => {

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

        text = `<span> ${text} </span>`
        setDisplayText(text)
        setLoading(false)
        
        return 
        
        let totalAmount = 0
        const taxAmount = props.tax ?? 30.00
        const costAmount = props.cost ?? 30.00
        totalAmount = taxAmount + costAmount
        console.log(`when the tax is ${taxAmount} and the cost is ${costAmount} then the total amount is ${totalAmount}`)

    }, [props]);

    const RenderText = () => {
        switch(props.type) {
            case 'paragraph':
                return <div className='paragraphs'> {convert(displayText)} </div>
            case 'list':
                return <span className='paragraphs'> {convert(displayText)} </span>
            default:
                return <div className='paragraphs'> {convert(displayText)} </div>
        } 
    }

    return loading ? <div/> : <RenderText />
    
}

export default TextParagraph