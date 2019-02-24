// Default
import React from 'react';

// Internal imports
import 'react-quill/dist/quill.snow.css'
import '../assets/css/editor.css';

// Third party
import ReactQuill from 'react-quill'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

/* 
 * Simple editor component that takes placeholder text as a prop 
 */
class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { editorHtml: '' }
    }

    handleChange = (html) => {
        this.setState({ editorHtml: html });
    }

    handleClear = (html) => {
        this.setState({ editorHtml: '' });
    }

    render() {
        const { onSubmit } = this.props
        
        return (
            <div className="app">
                <ReactQuill
                    theme='snow'
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    placeholder={this.props.placeholder}
                />
                <div className="editor-footer">
                    <Button className="editor-save" variant="contained" color="primary" onClick={() => this.handleClear()}>
                        Clear
                    </Button>
                    <Button className="editor-clear" variant="contained" color="secondary" onClick={() => onSubmit()}>
                        Save
                    </Button>
                </div>
            </div>
        )
    }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

/* 
 * PropType validation
 */
Editor.propTypes = {
    placeholder: PropTypes.string,
}

export default Editor;