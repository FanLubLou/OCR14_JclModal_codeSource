import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import JclModal from '../src/lib/JclModal';

const codeExample = `
function ModalExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir Modal</button>
      <JclModal 
        isOpen={isOpen} 
        onRequestClose={() => setIsOpen(false)}
      >
        <h2>Contenu du Modal</h2>
        <p>Ceci est un exemple de JclModal.</p>
      </JclModal>
    </div>
  );
}

render(<ModalExample />);
`;

const JclModalDocs = () => (
  <LiveProvider code={codeExample} scope={{ JclModal }}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

export default JclModalDocs;