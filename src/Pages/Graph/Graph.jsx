import React, { useState } from 'react';
import { Tree } from 'react-d3-tree';
import { CSSTransition } from 'react-transition-group';
import './Graph.css'; // Import your CSS file for animations

const familyTreeData = {
  name: 'Family', // Root node
  children: [
    {
      name: 'Parent 1',
      children: [
        {
          name: 'Child 1',
          attributes: {
            relationship: 'Child'
          }
        },
        {
          name: 'Child 2',
          attributes: {
            relationship: 'Child'
          }
        }
      ]
    },
    {
      name: 'Parent 2',
      children: [
        {
          name: 'Child 3',
          attributes: {
            relationship: 'Child'
          }
        },
        {
          name: 'Child 4',
          attributes: {
            relationship: 'Child'
          }
        }
      ]
    }
  ]
};

const Graph = () => {
  const [inProp, setInProp] = useState(true); // State for toggling CSSTransition

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <CSSTransition
        in={inProp}
        timeout={300}
        classNames="tree"
        unmountOnExit
      >
        <Tree
          data={familyTreeData}
          orientation="vertical"
          translate={{ x: 300, y: 50 }}
          separation={{ siblings: 2, nonSiblings: 2 }}
        />
      </CSSTransition>
    </div>
  );
};

export default Graph;
