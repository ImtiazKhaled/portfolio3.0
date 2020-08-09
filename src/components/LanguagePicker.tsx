import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd'

const LanguagePicker = (props: LanguagePickerProps) => {

    var [ SelectedLanguage, ChangeLanguage ] = useState('en')

    const LanguageMenu = () => {
        return <Menu
            onClick={(item) => ChangeLanguage(item.key.toString())}
        >
            {
                props.languages ? props.languages.map( language => 
                    <Menu.Item key={language.key}>
                        {language.displayText}
                    </Menu.Item>
                ) : <div />
            }
        </Menu>
    }

    return props.languages && 
    ( props.languages.length === 1 ||
    props.languages.length === 0) ? 
    <div /> :
    <Dropdown
        overlay={LanguageMenu} 
        placement='bottomRight'
        className='language-container'
    >
        <div>
            lang { SelectedLanguage }
        </div>
    </Dropdown>

}

export default LanguagePicker