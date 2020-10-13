import React, { useEffect } from 'react';
import { Layout, Row, Col } from 'antd'
import './app.css'
import Links from './components/Links'
import Picture from './components/Picture'
import LanguagePicker from './components/LanguagePicker'
import TextParagraph from './components/TextParagraph'
import ListParagraph from './components/ListParagraph'
import data from './data.json'

const { Footer, Content } = Layout

const App = () => {

  useEffect(() => {
    document.documentElement.style.setProperty('--link-color', data.theme['link-color'])
    document.documentElement.style.setProperty('--text-color', data.theme['text-color'])
    document.documentElement.style.setProperty('--background-color', data.theme['background-color'])
    document.documentElement.style.setProperty('--link-color-highlight', data.theme['link-color-highlight'])
  },[])
  
  const GenerateBody = (section : any) => {
    switch(section.type) {
      case 'picture':
        return <Picture {...section.data} />
      case 'text-paragraph':
        return <TextParagraph {...section.data} />
      case 'list-paragraph':
        return <ListParagraph main={section.main} list={section.list} text={section.text} />
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
