import React from 'react';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var markdown = event.target.value;
        this.props.onChange(markdown);
    }

    render() {
        return <textarea className="Editor" onChange={this.handleChange} />
    }
}