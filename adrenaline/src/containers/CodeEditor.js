import React, { Component, Fragment } from "react";
import "./CodeEditor.css";

import CodeMirror from '@uiw/react-codemirror';
// import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { python } from '@codemirror/lang-python';

export default class CodeEditor extends Component {
	render() {
    const { code } = this.props;
		const stringifiedCode = code.join("\n");

    return (
      <CodeMirror
        className="editor"
        value={stringifiedCode}
        extensions={[python()]}
      />
    )
	}
}
