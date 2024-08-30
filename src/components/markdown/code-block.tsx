import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface CodeBlockProps {
  language: string;
  children: React.ReactNode;
}

/**
 * TODO: Add copy button to code block
 * https://medium.com/@lobocroidy/creating-a-code-block-with-syntax-highlighting-and-copy-button-using-react-and-typescript-c69be2061d73
 * https://www.bojanjagetic.com/post/react-syntaxhighlighter-copy-clipboard
 * 
 * TODO: diff
 * https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/diff.html
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => (
  <SyntaxHighlighter
    style={oneDark}
    PreTag="div"
    language={language}
    wrapLongLines={true}
    showLineNumbers={true}
    wrapLines={true}
    showInlineLineNumbers={true}
  >
    {String(children)}
  </SyntaxHighlighter>
);

export default CodeBlock;
