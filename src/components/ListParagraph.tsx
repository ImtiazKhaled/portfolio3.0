import React from 'react'
import TextParagraph from './TextParagraph'

const ListParagraph = (props: ListParagraphProps) => {
    return <div>
        <TextParagraph {...props.main} />
        <ul>
        {
            props.list && props.list.length > 0 ? props.list.map( 
                (listItem: TextParagraphProps) => 
                    <li key={listItem.text} className='internship-list'>
                        <TextParagraph {...listItem} /> 
                    </li>
            ) :
            <div />
        }
        </ul>
    </div>
}

export default ListParagraph