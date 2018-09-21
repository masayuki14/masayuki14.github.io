import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss/src/loadCSS';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  icon: {
    fontSize: 30,
  }
})

class Links extends React.Component {

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render () {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="fab" color="primary" aria-label="blog" href="https://masayuki14.hatenablog.com/" className={classes.button}>
            <Icon className={classNames(classes.icon, "fas fa-pen-fancy")} style={{fontSize: 30}}></Icon>
        </Button>

        <Button variant="fab" color="primary" aria-label="twitter" href="https://twitter.com/masayuki14" className={classes.button}>
            <Icon className={classNames(classes.icon, "fas fa-twitter")} class="fab fa-twitter" style={{fontSize: 30}}></Icon>
        </Button>

        <Button variant="fab" color="primary" aria-label="github" href="https://github.com/masayuki14/" className={classes.button}>
            <Icon className={classNames(classes.icon, "fas fa-github")} class="fab fa-github" style={{fontSize: 30}}></Icon>
        </Button>

        <Button variant="fab" color="primary" aria-label="speakerdeck" href="https://speakerdeck.com/masayuki14" className={classes.button}>
            <Icon className={classNames(classes.icon, "fas fa-slideshare")} class="fab fa-slideshare" style={{fontSize: 30}}></Icon>
        </Button>

        <Button variant="fab" color="primary" aria-label="connpass" href="https://connpass.com/user/masayuki14/" className={classes.button}>
            <Icon className={classNames(classes.icon, "fas fa-calendar-alt")} class="fas fa-calendar-alt" style={{fontSize: 30}}></Icon>
        </Button>

        <Button variant="fab" color="primary" aria-label="wantedly" href="https://www.wantedly.com/users/74688" className={classes.button}>
            <Icon className={classNames(classes.icon, "fas fa-info")} class="fas fa-info" style={{fontSize: 30}}></Icon>
        </Button>
      </div>
    )
  }
}

Links.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Links)
