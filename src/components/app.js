import React from 'react';
import SplitPane from 'react-split-pane';
import Editor from './editor'
import Preview from './preview'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        };

        this.handleResize = this.handleResize.bind(this);
        this.markdownChanged = this.markdownChanged.bind(this);
    }

    handleResize(width) {
        this.monaco.editor.layout();
    }

    markdownChanged(markdown) {
        this.setState({
            markdown: markdown
        });
    }

    render() {
        return (
            <SplitPane split="vertical" defaultSize={200} onChange={this.handleResize}>
                <Editor monacoRef={(monaco) => { this.monaco = monaco; }} onChange={this.markdownChanged} />
                <Preview markdown={this.state.markdown} />
            </SplitPane>
        )
    }
}
