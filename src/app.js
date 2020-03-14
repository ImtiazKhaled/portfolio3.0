import React from 'react'
import { GithubFilled, CodeFilled, LinkedinFilled, MailFilled, FilePdfFilled } from '@ant-design/icons';
import './app.css'
  
const App = () => {
  
  return  <div className='full-page'>
      <div className='paragraphs'>
          Hi, i'm Imtiaz Khaled.
      </div>
      
      <div className='paragraphs'>
          I was born and raised in <a className='links' href='https://en.wikipedia.org/wiki/Bangladesh'><span> Bangladesh, </span></a> and currently stay in Texas,
          studying <a className='links' href='https://cse.uta.edu/'><span> Computer Science </span></a> @<a className='links' href='https://www.uta.edu/'><span> The Univertsity of Texas, Arlington.</span></a>
      </div>

      <div className='paragraphs'>
        I have won some stuff at a bunch of different <a className='links' href='https://www.theshorthorn.com/news/for-uta-student-hackathon-team-winning-is-in-the-code/article_133c3eb8-6de8-11e9-a1f8-1bf4fa4b99df.html'><span> hackathons, </span></a>
        and find myself working on all sorts of projects, using all kinds of 
        <a className='links' href='https://octoprofile.now.sh/user?id=ImtiazKhaled'><span> different technologies. </span></a> 
      </div>
      
      <div className='paragraphs'>
        I have previously worked @<a className='links' href='https://bluetechbd.com/'><span> Bluetech Solutions, </span></a> as a frontend-developer intern, and am 
        currently working @<a className='links' href='https://www.ayokasystems.com/'><span> Ayoka Systems </span></a> as a web-application developer intern; starting fall 2020,
        I will work @<a className='links' href='https://www.call-em-all.com/'><span> Call-Em-All </span></a> as Software Engineer Intern. 
      </div>

      <div className='paragraphs'>
        If you want to prepare for interviews, or just want to have some fun solving challenging problems, check out <a className='links' href='https://blazeoj.com/'><span> BlazeJudge. </span></a>
      </div>

      <div className='paragraphs'>
        If you want to know more about me and how I think feel free to check out my <a className='links' href=''><span> blog. </span></a>
      </div> 

      <div>
        <a className='links icons' href='https://github.com/ImtiazKhaled'> <GithubFilled /> </a>
        <a className='links icons' href='https://www.linkedin.com/in/imtiazkhaled/'> <LinkedinFilled /> </a>
        <a className='links icons' href='https://devpost.com/ImtiazMujtabaKhaled?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'> <CodeFilled /> </a>
        <a className='links icons' href='mailto://imtiazkhaled07@gmail.com'> <MailFilled /> </a>
        <a className='links icons' href=''> <FilePdfFilled /> </a>      
      </div> 

      <div className='footer'>
        Imtiaz Mujtaba Khaled © 2020
      </div>

  </div>
}

export default App
