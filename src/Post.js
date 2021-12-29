import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AnimatorComp from './Animator.js';
import Avatar from '@material-ui/core/Avatar';

import './about.css';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    whiteSpace: 'pre-line'
  }),
});

const avatar = {
    float: 'left',
    width: '300px',
    height: '300px',
    borderRadius: '5px',
    margin: '20px 20px 10px 10px'
}

const style = {
    fontFamily: 'monospace',
    fontSize: '32px',
    textAlign: 'center',
    webkitTextStroke: '1px #808080',
    color: 'white',
    paddingBottom: '16px'
}

const text = {
    fontWeight: 'bold'
}

class Post extends React.Component {

  render() {
    const { classes } = this.props;
    const image = "https://cdn-images-1.medium.com/max/711/1*jhD-rWxuFvo17Q1Mw6LuEw.jpeg";
    return (
      <AnimatorComp>
        <Paper className={classes.root} elevation={4}>
          <div style={style}>building a react app</div>
          <Avatar style={avatar} alt="profPic" src={image} className={classes.avatar} />
          <Typography component="p">
            <p style={text}>Paragraph 1,</p>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt id aliquet risus. Posuere sollicitudin aliquam ultrices sagittis. Semper risus in hendrerit gravida rutrum. Eget dolor morbi non arcu risus. Blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Id donec ultrices tincidunt arcu non sodales neque sodales. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Sagittis aliquam malesuada bibendum arcu vitae elementum. Laoreet id donec ultrices tincidunt. Placerat orci nulla pellentesque dignissim enim sit. Ultrices mi tempus imperdiet nulla malesuada.
                Nulla facilisi morbi tempus iaculis urna id volutpat. Lacinia quis vel eros donec ac odio tempor. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Ultricies mi quis hendrerit dolor magna. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Arcu ac tortor dignissim convallis. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Libero nunc consequat interdum varius sit amet mattis. At erat pellentesque adipiscing commodo elit at. Volutpat sed cras ornare arcu dui vivamus arcu felis.`}
          <a href="www.google.com">here.</a>
            <p style={text}>Paragraph 2,</p>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            <p style={text}>Paragraph 3,</p>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt id aliquet risus. Posuere sollicitudin aliquam ultrices sagittis. Semper risus in hendrerit gravida rutrum. Eget dolor morbi non arcu risus. Blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Id donec ultrices tincidunt arcu non sodales neque sodales. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Sagittis aliquam malesuada bibendum arcu vitae elementum. Laoreet id donec ultrices tincidunt. Placerat orci nulla pellentesque dignissim enim sit. Ultrices mi tempus imperdiet nulla malesuada.
                Nulla facilisi morbi tempus iaculis urna id volutpat. Lacinia quis vel eros donec ac odio tempor. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Ultricies mi quis hendrerit dolor magna. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Arcu ac tortor dignissim convallis. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Libero nunc consequat interdum varius sit amet mattis. At erat pellentesque adipiscing commodo elit at. Volutpat sed cras ornare arcu dui vivamus arcu felis.`}
          </Typography>
        </Paper>
      </AnimatorComp>
    );
  }
}

export default withStyles(styles)(Post);
