# React Custom Modal - jcl-custom-modal

`jcl-custom-modal` is a customizable modal component for React applications. This package allows developers to easily add modals to their projects and customize the content and appearance of the modal.

## Features
- **Customizable Content:** Pass any content as children to display inside the modal.
- **Simple to Use:** Lightweight and easy to integrate into any React project.
- **Closable:** Provides a close button to dismiss the modal.

## Installation
To install the package, use npm or yarn:

bash
npm `install jcl-custom-modal`
or 
bash
yarn `add jcl-custom-modal`

## Usage
Heres a simple example of how to use the JclModal component in your React application:


import React, { useState } from 'react';
import JclModal from 'jcl-custom-modal'; // Import the modal component
import 'jcl-custom-modal/dist/JclModal.css'; // Import the CSS styles

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <JclModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is an example of using JclModal.</p>
      </JclModal>
    </div>
  );
};

export default App;`

## Props
 - `isOpen` (boolean): Controls whether the modal is visible.
 - `onRequestClose` (function): A callback function that triggers when the modal is closed.
 - `className` (string): Additional class names for custom styling.

## Props

To customize the appearance of the modal, you can override the default CSS styles. Below are the class names available for customization:
    - `.modal-overlay`: The background overlay.
    - `.modal-content`: The container for the modal content.
    - `.close-button`: The close button.

## Link
https://www.npmjs.com/package/jcl-custom-modal# OCR14_JclModal_codeSource
# OCR14_JclModal_codeSource
