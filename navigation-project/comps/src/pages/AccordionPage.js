import React from 'react';
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'random1',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want',
    },
    {
      id: 'random2',
      label: 'Can I use Javascript on a project?',
      content: 'You can use JS on any project you want',
    },
    {
      id: 'random3',
      label: 'Can I use Css on a project?',
      content: 'You can use CSS on any project you want',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
