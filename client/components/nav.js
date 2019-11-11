import React from 'react'
import Link from 'next/link'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

// const links = [
//   { href: 'https://zeit.co/now', label: 'ZEIT' },
//   { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const Nav = () => {
  const classes = useStyles();
  return (
    <Header
        brand="FLine"
        color="dark"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink + " " + classes.navLinkActive}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                <Explore className={classes.icons} /> Courses
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/profile"
                className={classes.navLink}
                color="transparent"
              >
                <AccountCircle className={classes.icons} /> Profile
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                <Icon className={classes.icons}>settings</Icon> Settings
              </Button>
            </ListItem>
          </List>
        }
    />
  );
}

export default Nav
