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
        
        let icon : React.ReactElement;

        switch(link.type) {
            case 'github':
                icon = <a className='links icons' href={link.link}> <GithubFilled /> </a>
                break
            case 'linkedin':
                icon = <a className='links icons' href={link.link}> <LinkedinFilled /> </a>
                break
            case 'devpost':
                icon = <a className='links icons' href={link.link}> <CodeFilled /> </a>
                break
            case 'blazeoj':
                icon = <a className='links icons' href={link.link}> <FireFilled /> </a>
                break
            case 'instagram':
                icon = <a className='links icons' href={link.link}> <InstagramFilled /> </a>
                break
            case 'twitter':
                icon = <a className='links icons' href={link.link}> <TwitterCircleFilled /> </a>
                break
            case 'dribble':
                icon = <a className='links icons' href={link.link}> <DribbbleSquareFilled /> </a>
                break
            case 'youtube':
                icon = <a className='links icons' href={link.link}> <YoutubeFilled /> </a>
                break
            case 'medium':
                icon = <a className='links icons' href={link.link}> <MediumSquareFilled /> </a>
                break
            case 'facebook':
                icon = <a className='links icons' href={link.link}> <FacebookFilled /> </a>
                break
            case 'mail':
                icon = <a className='links icons' href={link.link}> <MailFilled /> </a>
                break
            case 'resume':
                icon = <a className='links icons' href={link.link} target='_blank' rel="noopener noreferrer"> <FilePdfFilled /> </a>
                break
            default:
                icon = <span />
                break
        }

        return icon
    }

    return <div>
        {
            props.links ? props.links.map( (link: SocialLink) => <span key={link.type}> { RenderLink(link) } </span> ) : <div />
        }
    </div> 
}

export default Links