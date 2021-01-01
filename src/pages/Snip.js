import React from 'react';

import marked from 'marked';

import '../css/Snip.css'

export default class Construction extends React.Component {
    constructor(props) {
        super(props)

        const params = new URLSearchParams(window.location.search);

        if (params.get('v')) {
            this.text = unescape(params.get('v')) // use escape() to escape
            this.mode = 'view'
        } else {
            this.mode = 'create'
        }

        console.log(this.mode + ' mode');

        this.state = {
            value: 'Changes will reflect below'
        }

        this.handleChange = this.handleChange.bind(this)
    }


    view() {
        return <div className="view" dangerouslySetInnerHTML={{__html: marked(this.text)}} />
    }

    create() {
        return <div className="create">
            <textarea onChange={this.handleChange} value={this.state.value}></textarea>

            <div className="preview"
            dangerouslySetInnerHTML={{
                __html: marked(this.state.value)
            }}>
            </div>

            <a href={
                window.location.href + '?v=' + escape(this.state.value)
            }
            target="__blank"
            >
                sharable link
            </a>
        </div>
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        if (this.mode === 'view') {
            return this.view()
        } else {
            return this.create()
        }
    }
}