import { BoldExtension, ItalicExtension } from 'remirror/extensions';
import { Remirror, useRemirror } from '@remirror/react';

import 'remirror/styles/all.css';

function App() {
  const { manager, state } = useRemirror({
    extensions: () => [new BoldExtension(), new ItalicExtension()],
    content: '<p>I love <b>Remirror</b></p>',
    selection: 'start',
    stringHandler: 'html',
  });

  return (
    <div className="remirror-theme">
     <Remirror manager={manager} initialContent={state} />
    </div>
  );
}

export default App;
