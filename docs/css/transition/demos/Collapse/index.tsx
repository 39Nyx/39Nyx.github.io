import React, { useRef, useState } from 'react';
import { useStyles } from './styles';

const Collapse: React.FC = () => {
  const { styles } = useStyles();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.height = '0px';
        contentRef.current.style.padding = '0px';
      } else {
        contentRef.current.style.height = 'auto';
        const { height } = contentRef.current.getBoundingClientRect();
        contentRef.current.style.height = '0px';
        contentRef.current.getBoundingClientRect();
        contentRef.current.style.padding = '16px';
        contentRef.current.style.height = `${ height }px`;
      }
    }
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={ styles.collapse }>
        <div className={ styles.item }>
          <div className={ styles.title } onClick={ toggleContent }>折叠标题1
          </div>
          <div className={ isOpen ? `${ styles.content }` : styles.content }
               ref={ contentRef }
          >
            <div>折叠内容1</div>
            <div>折叠内容1</div>
            <div>折叠内容1</div>
            <div>折叠内容1</div>
            <div>折叠内容1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
