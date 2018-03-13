import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '# test'
        };

        this.editorDidMount = this.editorDidMount.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    editorDidMount(editor, monaco) {
        editor.focus();
    }

    onChange(value) {
        var markdown = value;
        this.props.onChange(markdown);
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <MonacoEditor
                language="markdown"
                theme="vs-dark"
                value={this.state.code}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        )
    }
}