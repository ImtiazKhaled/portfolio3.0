import React from 'react'
import { 
    GithubFilled, CodeFilled, 
    LinkedinFilled, FireFilled, 
    MailFilled, FilePdfFilled,
    FacebookFilled, InstagramFilled,
    TwitterCircleFilled, DribbbleSquareFilled,
    YoutubeFilled, MediumSquareFilled
} from '@ant-design/icons'

const Links = (props : SocialLinksProps) => {

    const RenderLink = (link: SocialLink) => {
        switch(link.type) {
            case 'github':
                return <a className='links icons' href={link.link}> <GithubFilled /> </a>
            case 'linkedin':
                return <a className='links icons' href={link.link}> <LinkedinFilled /> </a>
            case 'devpost':
                return <a className='links icons' href={link.link}> <CodeFilled /> </a>
            case 'blazeoj':
                return <a className='links icons' href={link.link}> <FireFilled /> </a>
            case 'instagram':
                return <a className='links icons' href={link.link}> <InstagramFilled /> </a>
            case 'twitter':
                return <a className='links icons' href={link.link}> <TwitterCircleFilled /> </a>
            case 'dribble':
                return <a className='links icons' href={link.link}> <DribbbleSquareFilled /> </a>
            case 'youtube':
                return <a className='links icons' href={link.link}> <YoutubeFilled /> </a>
            case 'medium':
                return <a className='links icons' href={link.link}> <MediumSquareFilled /> </a>
            case 'facebook':
                return <a className='links icons' href={link.link}> <FacebookFilled /> </a>
            case 'mail':
                return <a className='links icons' href={link.link}> <MailFilled /> </a>
            case 'resume':
                return <a className='links icons' href={link.link} target='_blank' rel="noopener noreferrer"> <FilePdfFilled /> </a>
            default:
                return <span />
        }
    }

    return <div>
        {
            props.links ? props.links.map( (link: SocialLink) => <span key={link.type}> { RenderLink(link) } </span> ) : <div />
        }
    </div> 
}

export default Links