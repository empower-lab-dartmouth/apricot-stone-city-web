import {selector} from 'recoil';
import {selectionNode} from './Graph';


const getNodeInfo = selector({
  key: 'filterNodeInfo',
  get: ({get}) => {
    const hoverNode = get(selectionNode);
    console.log(hoverNode);

    let cardInfo = {
      id: '',
      textReceived: '',
      choices: [],
      edges: [],
    };

    const node = hoverNode;
    console.log(node);

    if (node.id==='Hover Over Node for Info') {
      cardInfo = {
        id: node.id,
        textReceived: '',
        choices: [],
        edges: [{
          source: '\'source\'',
          target: '\'target\'',
          weight: 'xx',
        }],

      };
      return cardInfo;
    }

    cardInfo = {
      id: node.id,
      textReceived: '',
      choices: [],
      edges: [{
        source: '\'source\'',
        target: '\'target\'',
        weight: 'xx',
      }],

    };

    console.log('returning card info');
    console.log(cardInfo);
    return cardInfo;
  },
});

export default getNodeInfo;
