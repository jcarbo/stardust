import React, { Component } from 'react'
import { Button, Select, Input } from 'stardust'

export default class InputActionExample extends Component {
  render() {
    const options = [
      { value: 'all', text: 'All' },
      { value: 'articles', text: 'Articles' },
      { value: 'products', text: 'Products' },
    ]
    return (
      <Input className='left icon action' icon='search' placeholder='Search...'>
        <Select compact options={options} defaultValue='articles' />
        <Button type='submit'>Search</Button>
      </Input>
    )
  }
}
