import React, { useState } from 'react';
import { Layout } from 'antd'
import { GithubFilled, CodeFilled, LinkedinFilled, FireFilled, MailFilled, FilePdfFilled } from '@ant-design/icons'
import Face from './assets/face.png'
import FaceHover from './assets/face_hover.png'
import Resume from './assets/imtiaz-khaled-resume.pdf'
import './App.css'

const { Header, Footer, Content } = Layout
const App = () => {
  
  var [ DisplayPicture, SetDisplay ] = useState(Face)
  
  return <Layout>
      
  <Header className="text">
    Hi, i'm Imtiaz,
  </Header>

  <Content className="text">
    <div
    >
      <img
        height={250}
        onMouseEnter={() => SetDisplay(FaceHover)}
        onMouseLeave={() => SetDisplay(Face)}   
        src={DisplayPicture}
        alt="My Bitmoji" 
      />
    </div>
    <div className='paragraphs remove-top'>
        I was born and raised in <a className='links' href='https://en.wikipedia.org/wiki/Bangladesh'><span> Bangladesh</span></a>, and currently stay in Texas,
        studying <a className='links' href='https://cse.uta.edu/'><span> Computer Science </span></a> @<a className='links' href='https://www.uta.edu/'><span> The University of Texas, Arlington</span></a>.
    </div>

    <div className='paragraphs'>
      I've won some stuff at a bunch of different <a className='links' href='https://www.theshorthorn.com/news/for-uta-student-hackathon-team-winning-is-in-the-code/article_133c3eb8-6de8-11e9-a1f8-1bf4fa4b99df.html'><span> hackathons</span></a>,
      and find myself working on all sorts of projects, using all kinds of 
      <a className='links' href='https://octoprofile.now.sh/user?id=ImtiazKhaled'><span> different technologies</span></a>. 
    </div>

    <div className='paragraphs'>
      Some positions I've held / will hold throughout my college career
    </div>
    <ul>
      <li className='internship-list'><span>Summer,  Sphomore Year</span> - <a className='links' href='https://bluetechbd.com/'><span> Bluetech Solutions</span></a>, software engieneer intern</li>
      <li className='internship-list'><span>Spring & Summer,  Junior Year</span> - <a className='links' href='https://www.ayokasystems.com/'><span> Ayoka Systems</span></a>, web-application developer intern</li>
      <li className='internship-list'><span>Fall,  Senior Year</span> - <a className='links' href='https://www.text-em-all.com/'><span> Text-Em-All</span></a>, software engieneer intern</li>
    </ul>

    <div className='paragraphs'>
      If you want to prepare for interviews, or just want to have some fun solving challenging problems, check out <a className='links' href='https://blazeoj.com/'><span> BlazeJudge</span></a>.
    </div>

    <div>
      <a className='links icons' href='https://github.com/ImtiazKhaled'> <GithubFilled /> </a>
      <a className='links icons' href='https://www.linkedin.com/in/imtiazkhaled/'> <LinkedinFilled /> </a>
      <a className='links icons' href='https://devpost.com/ImtiazMujtabaKhaled?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'> <CodeFilled /> </a>
      <a className='links icons' href='https://blazeoj.com/u/ImtiazKhaled'> <FireFilled /> </a>
      <a className='links icons' href='mailto://imtiazkhaled07@gmail.com'> <MailFilled /> </a>
      <a className='links icons' href={Resume} target='_blank' rel="noopener noreferrer"> <FilePdfFilled /> </a>      
    </div> 
  </Content>

  <Footer className="text">
    © 2020
  </Footer>

</Layout>
}

export default App;
