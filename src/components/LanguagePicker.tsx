import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd'

const LanguagePicker = () => {
    var [ SelectedLanguage, ChangeLanguage ] = useState('en')

    const LanguageMenu = () => {
        return <Menu
            onClick={(item) => ChangeLanguage(item.key.toString())}
        >
            <Menu.Item key='en'>
                English
            </Menu.Item>
            <Menu.Item key='es'>
                Spanish
            </Menu.Item>
        </Menu>
    }

    return <Dropdown
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