import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };

        this.editorDidMount = this.editorDidMount.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    editorDidMount(editor, monaco) {
        editor.focus();
        editor.layout();
    }

    onChange(value) {
        this.props.onChange(value);
        this.setState({
            code: value
        });
    }

    render() {
        return (
            <MonacoEditor
                language="markdown"
                theme="vs-dark"
                ref={this.props.monacoRef}
                value={this.state.code}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
                requireConfig={{
                    url: './vs/loader.js',
                    baseUrl: '.',
                    paths: {
                        vs: 'vs'
                    }
                }}
            />
        )
    }
}