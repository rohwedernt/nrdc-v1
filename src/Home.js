// import React from 'react';
// import {Github, Facebook, LinkedIn, Twitter, Instagram} from './icons/icons.js';

// const style = {
//     //text if needed
//     //fontFamily: 'monospace',
//     //fontSize: '32px',
//     textAlign: 'center',
//     //webkitTextStroke: '1px #808080',
//     //color: 'white',
//     //whiteSpace: 'pre',

//     //icon stlyes
//     //paddingLeft: '20px'
//     //display: 'flex',
//     //justifyContent: 'center',
// }

// function Home(props) {
//   return (
//         <div style={style}>
//           <Github />
//           <LinkedIn />
//           <Twitter />
//           <Facebook />
//           <Instagram />
//         </div>
        
      
//   );
// }

// export default Home;



import React from 'react';
import posed from 'react-pose';
import {Github, Facebook, LinkedIn, Twitter, Instagram} from './icons/icons.js';

import './styles.css';

const HomeContent = posed.div({
  open: {
    y: '0%',
    delayChildren: 0,
    staggerChildren: 100,
    transition: {
        y: { type: 'spring', stiffness: 300, damping: 100 },
        default: { duration: 1000 }
      }
  },
  closed: { y: '-10%', delay: 300 }
});

const Item = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: -10, opacity: 0 }
});

class Home extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 0);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <HomeContent className="blog-content" pose={isOpen ? 'open' : 'closed'}>
        <a target="_blank" href='https://github.com/rohwedernt'>
          <Item className="item">
            <Github />
          </Item>
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/nate-rohweder-8b1026121/'>
          <Item className="item">
            <LinkedIn />
          </Item>
        </a>
        <a target="_blank" href='https://twitter.com/nrohweder1'>
          <Item className="item">
            <Twitter />
          </Item>
        </a>
        <a target="_blank" href='https://www.facebook.com/rohwedernt'>
          <Item className="item">
            <Facebook />
          </Item>
        </a>
        <a target="_blank" href='https://www.instagram.com/naterohweder/'>
          <Item className="item">
            <Instagram />
          </Item>
        </a>
      </HomeContent>
    );
  }
}

export default Home
