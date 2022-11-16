import { Editor, EditorState, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';
import React, { ReactElement } from 'react';
import './Editor.css';

const MyEditor = (): ReactElement => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const onChange = (editorState: any) => {
    setEditorState(editorState);
  };

  const insertAmpersand = () => {
    let contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const contentStateWithEntity = contentState.createEntity(
      'MY_ENTITY_TYPE',
      'IMMUTABLE'
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    contentState = Modifier.insertText(
      contentState,
      selectionState,
      '&',
      undefined,
      entityKey
    );

    let newState = EditorState.push(
      editorState,
      contentState,
      'insert-characters'
    );
    if (!newState.getCurrentContent().equals(editorState.getCurrentContent())) {
      const sel = newState.getSelection();
      const updatedSelection = sel.merge({
        anchorOffset: sel.getAnchorOffset(),
        focusOffset: sel.getAnchorOffset(),
      });
      newState = EditorState.forceSelection(newState, updatedSelection);
    }

    setEditorState(newState);
  };
  return (
    <div className="editor-wrapper">
      <div className="editor-container">
        <Editor editorState={editorState} onChange={onChange} />

        <button onClick={insertAmpersand} className="editor-btn">
          Insert "&"
        </button>
      </div>
    </div>
  );
};

export default MyEditor;
