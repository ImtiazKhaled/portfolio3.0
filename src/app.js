import React from 'react'
import { Layout, Avatar } from 'antd'
import { GithubFilled, CodeFilled, LinkedinFilled, MailFilled, FilePdfFilled } from '@ant-design/icons'
import './app.css'

const { Header, Footer, Sider, Content } = Layout
  
const App = () => {
  
  const downloadResume = () => {
    const bodyFile = {
      type: "GET_FILE",
      url: "/home/imtiazkhaled07/public",
      filename: "resume.pdf"
    }
    fetch('http://34.68.138.86:8080/', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyFile)    
    })
    .then(response => {
      response.blob().then(blob => {
      let url = window.URL.createObjectURL(blob)
      let a = document.createElement('a')
      a.href = url
      a.download = 'resume.pdf'
      a.click()
      })
    })
  }

  return  <Layout>
      
      <Header className="text">
        Hi, i'm Imtiaz,
      </Header>

      <Content className="text">
        <div>
          <Avatar size={180} src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/26060327_1652374648116027_5209680591847453359_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=cuVnCgbPBIIAX-Rb5_U&_nc_ht=scontent-dfw5-2.xx&oh=4500a54c107d3666eb5103cee83f34d6&oe=5EFFE4B6"/>
        </div>
        <div className='paragraphs'>
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
          <li className='internship-list'><span>Fall,  Senior Year</span> - <a className='links' href='https://www.call-em-all.com/'><span> Call-Em-All</span></a>, software engieneer intern</li>
        </ul>

        <div className='paragraphs'>
          If you want to prepare for interviews, or just want to have some fun solving challenging problems, check out <a className='links' href='https://blazeoj.com/'><span> BlazeJudge</span></a>.
        </div>

        <div>
          <a className='links icons' href='https://github.com/ImtiazKhaled'> <GithubFilled /> </a>
          <a className='links icons' href='https://www.linkedin.com/in/imtiazkhaled/'> <LinkedinFilled /> </a>
          <a className='links icons' href='https://devpost.com/ImtiazMujtabaKhaled?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'> <CodeFilled /> </a>
          <a className='links icons' href='mailto://imtiazkhaled07@gmail.com'> <MailFilled /> </a>
          <span className='links icons' onClick={()=>downloadResume()}> <FilePdfFilled /> </span>      
        </div> 
      </Content>

      <Footer className="text">
        © 2020
      </Footer>
  
  </Layout>
}

export default App
