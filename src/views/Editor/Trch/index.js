import React, { Component } from 'react'
import { Button } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.less'

const toolbarOptions = [
  [{ 'font': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['blockquote', 'code-block'],
 

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],  
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction  
  [{ 'align': [] }],

  ['link', 'image', 'video'],


  ['clean']                                         // remove formatting button
]

export default class Trch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(value) {
    this.setState({
      text: value
    })
  }
  handleClick() {
    console.log(this.state.text)
  }
  render() {
    return (
      <div>
        <ReactQuill 
          value={this.state.text}
          onChange={this.handleChange}
          className="editor-trch"
          modules={{ toolbar: toolbarOptions }}
          />
          <Button onClick={this.handleClick}>提交</Button>
      </div>
    )
  }
}
