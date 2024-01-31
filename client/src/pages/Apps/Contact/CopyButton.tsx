import React, { useState } from 'react';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <div>
      <div onClick={copyToClipboard}>
        {isCopied ? 'Skopiowano!' : 'Skopiuj'}
      </div>
    </div>
  );
};

export default CopyButton;
