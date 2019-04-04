import React, { Component } from 'react'
import Remarkable from 'remarkable'

class MarkdownEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Hello ***World***!'
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    getRawMarkup() {
        const md = new Remarkable;
        return { __html: md.render(this.state.value) };
    }

    render() {
        return (
            <div>
                <h3>Input</h3>
                <p>Enter some markdown</p>
                <textarea cols="40" rows="8"
                    className="markdown-input"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div className="markdown-output" dangerouslySetInnerHTML={this.getRawMarkup()}>
                </div>
            </div>
        )
    }
}

export default MarkdownEditor
