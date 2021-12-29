import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AnimatorComp from './Animator.js';
import Avatar from '@material-ui/core/Avatar';

import { aboutPost } from './content/about';

import './about.css';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    whiteSpace: 'pre-line'
  }),
});

const avatar = {
    float: 'right',
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

class About extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <AnimatorComp>
        <Paper className={classes.root} elevation={4}>
          <div style={style}>{aboutPost.title}</div>
          <Avatar style={avatar} src={aboutPost.imgPath} className={classes.avatar} />
          <Typography component="p">
            <p style={text}>{aboutPost.welcome.title},</p>
              {aboutPost.welcome.content}
                <a href="www.google.com">here.</a>
            <p style={text}>{aboutPost.work.title},</p>
              {aboutPost.work.content}
            <p style={text}>{aboutPost.music.title},</p>
              {aboutPost.music.content}
          </Typography>
        </Paper>
      </AnimatorComp>
    );
  }
}

export default withStyles(styles)(About);
