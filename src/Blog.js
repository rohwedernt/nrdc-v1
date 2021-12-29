import React from 'react';
import posed from 'react-pose';
import BlogItem from './BlogItem';

import './styles.css';

const BlogContent = posed.ul({
  open: {
    y: '0%',
    delayChildren: 0,
    staggerChildren: 75,
    transition: {
        y: { type: 'spring', stiffness: 500, damping: 15 },
        default: { duration: 2000 }
      }
  },
  closed: { y: '-100%', delay: 300 }
});

const Item = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class Travel extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 0);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const image = "https://cdn-images-1.medium.com/max/711/1*jhD-rWxuFvo17Q1Mw6LuEw.jpeg";
    return (
      <BlogContent className="blog-content" pose={isOpen ? 'open' : 'closed'}>
        <Item className="item"><BlogItem image={image} title="Building a React App" desc="This is a sample code post about some unbelievable feat accompished in computer science"/></Item>
      </BlogContent>
    );
  }
}

export default Travel
