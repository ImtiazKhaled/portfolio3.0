import React from 'react';
import { Layout, Row, Col } from 'antd'
import './App.css'
import Links from './components/Links'
import Face from './components/Face'
import LanguagePicker from './components/LanguagePicker'
import TextParagraph from './components/TextParagraph'
import ListParagraph from './components/ListParagraph'
import data from './data.json'

const { Footer, Content } = Layout

const App = () => {
  
  const GenerateBody = (section : any) => {
    switch(section.type) {
      case 'picture':
        return <Face />
      case 'text-paragraph':
        return <TextParagraph {...section.data} />
      case 'list-paragraph':
        return <ListParagraph {...section.data} />
      case 'social-links':
        return <Links {...section.data} />
      default:
        return <div />
    }
  }

  return <Layout>

    <Row>
      <Col span={4} className='color-container'>
        {/* color */}
      </Col>
      <Col span={16} className='text add-top'>
          {data.header}
      </Col>
      <Col span={4}>
        <LanguagePicker languages={data.languages} />
      </Col>
    </Row>

    <Content className='text'>
      {
        data.content ? data.content.map( (section: any, index: number) => <div key={index}> {GenerateBody(section)} </div>  ) : <div /> 
      }
    </Content>

    <Footer className='text'>
      © 2020
    </Footer>

  </Layout>

}

export default App;
