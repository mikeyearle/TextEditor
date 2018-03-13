import React from 'react';
import marked from 'marked';

export default class Preview extends React.Component {
    getMarkdown() {
        var markdown = this.props.markdown;
        return { __html: marked(markdown) };
    }

    render() {
        return <div className="markdown-body" dangerouslySetInnerHTML={this.getMarkdown()} />
    }
}