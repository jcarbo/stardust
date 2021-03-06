import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'stardust'

// TODO: Update <Search> usage after its will be implemented

const Attached = () => {
  return (
    <div>
      <Menu attached='top'>
        <Menu.Item as={Dropdown} icon='wrench'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name='dropdown icon' />
              <span className='text'>New</span>

              <Dropdown.Menu>
                <Dropdown.Item>Document</Dropdown.Item>
                <Dropdown.Item>Image</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Item>Save...</Dropdown.Item>
            <Dropdown.Item>Edit Permissions</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Export</Dropdown.Header>
            <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown.Menu>
        </Menu.Item>

        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input className='prompt' type='text' placeholder='Search animals...' />
              <i className='search link icon' />
            </div>
            <div className='results'></div>
          </div>
        </Menu.Menu>
      </Menu>

      <Segment attached='bottom'>
        <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </div>
  )
}

export default Attached
