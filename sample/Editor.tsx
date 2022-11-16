import React, { FunctionComponent, useRef } from 'react';
import MUIRichTextEditor, { TMUIRichTextEditorRef } from 'mui-rte';
import { Button } from '@mui/material';
import InvertColorsIcon from '@mui/icons-material/InvertColors';

const MyAmpersand: FunctionComponent<any> = (props) => {
  return <span>&</span>;
};

const Editor = () => {
  const ref = useRef<TMUIRichTextEditorRef>(null);

  const insertAmpersand = () => {
    ref.current?.insertAtomicBlockSync('c-ampersand', '&');
  };
  return (
    <>
      <div
        style={{
          height: '400px',
          width: '80%',
          margin: 'auto',
          border: '1px solid black',
        }}
      >
        <MUIRichTextEditor
          label=""
          ref={ref}
          controls={['title', 'bold', 'underline', 'my-style']}
          customControls={[
            {
              name: 'c-ampersand',
              type: 'atomic',
              atomicComponent: MyAmpersand,
            },
            {
              name: 'my-style',
              icon: <InvertColorsIcon />,
              type: 'inline',
              inlineStyle: {
                backgroundColor: 'black',
                color: 'white',
              },
            },
          ]}
        />
      </div>

      <Button onClick={insertAmpersand}>Insert "&"</Button>
    </>
  );
};

export default Editor;
