import React from 'react';
import { Layout, Row, Col } from 'antd'
import './App.css'
import Links from './components/Links'
import Face from './components/Face'
// import LanguagePicker from './components/LanguagePicker'

const { Footer, Content } = Layout
const App = () => {
  
  return <Layout>

    <Row>
      <Col span={4} className='color-container'>
        {/* color */}
      </Col>
      <Col span={16} className='text'>
          Hi, i'm Imtiaz,
      </Col>
      <Col span={4}>
        {/* <LanguagePicker /> */}
      </Col>
    </Row>

    <Content className='text'>
      <Face />
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

      <Links />
    </Content>

    <Footer className='text'>
      © 2020
    </Footer>

  </Layout>
}

export default App;
