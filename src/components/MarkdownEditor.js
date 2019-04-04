import React, { Component } from 'react'

class MarkdownEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Hello ***World***!'
        }
    }

    render() {
        return (
            <div>
                <h3>Input</h3>
                <p>Enter some markdown</p>
                <textarea className="markdown-input" cols="40" rows="8" value={this.state.value}></textarea>
                <h3>Output</h3>
                <div className="markdown-output"></div>
            </div>
        )
    }
}

export default MarkdownEditor
