import { ReactElement } from 'react';
import MUIRichTextEditor from 'mui-rte';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import './Editor.css';

export default function Editor(): ReactElement {
  const save = (data: string) => {
    console.log(data);
  };
  return (
    <div>
      <MUIRichTextEditor
        label="Start typing..."
        onSave={save}
        // inlineToolbar={true}
        controls={['my-style']}
        customControls={[
          {
            name: 'my-style',
            icon: <InvertColorsIcon />,
            type: 'inline',
            inlineStyle: {
              backgroundColor: 'red',
              color: 'white',
            },
          },
        ]}
      />
    </div>
  );
}
