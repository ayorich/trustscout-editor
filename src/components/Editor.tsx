import React, { FunctionComponent, useRef } from 'react';
import MUIRichTextEditor, {
  TMUIRichTextEditorRef,
  TAsyncAtomicBlockResponse,
} from 'mui-rte';
import { Button, Typography } from '@mui/material';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AbcTwoTone from '@mui/icons-material/AbcTwoTone';

const save = (data: string) => {
  console.log(data);
};

const MyHashTagDecorator = (props: any) => {
  return (
    <span
      style={{
        color: '#3F51B5',
      }}
    >
      {props.children}
    </span>
  );
};

const MyAtDecorator = (props: any) => {
  const customUrl = 'http://myulr/mention/' + props.decoratedText;
  return (
    <a
      onClick={() => (window.location.href = customUrl)}
      style={{
        color: 'green',
        cursor: 'pointer',
      }}
    >
      {props.children}
    </a>
  );
};

const MyAmpersand: FunctionComponent<any> = (props) => {
  // const { blockProps } = props
  console.log('props', props);
  console.log(
    'props'
    // props.customStyleFn({
    //   fontSize: '30px',
    // })
  );
  //   props.customStyleFn = {
  //   };
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
