import React from 'react'
import { GithubFilled, CodeFilled, LinkedinFilled, FireFilled, MailFilled, FilePdfFilled } from '@ant-design/icons'
import Resume from '../assets/imtiaz-khaled-resume.pdf'

const Links = () => {
    return <div>
        <a className='links icons' href='https://github.com/ImtiazKhaled'> <GithubFilled /> </a>
        <a className='links icons' href='https://www.linkedin.com/in/imtiazkhaled/'> <LinkedinFilled /> </a>
        <a className='links icons' href='https://devpost.com/ImtiazMujtabaKhaled'> <CodeFilled /> </a>
        <a className='links icons' href='https://blazeoj.com/u/ImtiazKhaled'> <FireFilled /> </a>
        <a className='links icons' href='mailto://imtiazkhaled07@gmail.com'> <MailFilled /> </a>
        <a className='links icons' href={Resume} target='_blank' rel="noopener noreferrer"> <FilePdfFilled /> </a>      
    </div> 
}

export default Links