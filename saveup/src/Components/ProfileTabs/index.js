import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab: {
    marginLeft: 100,
  },
  info: {
    marginLeft: 200,
  }
};

const ProfileTabs = () => (
  <Tabs>
    <Tab label="Personal Info" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Personal Info</h2>
        <div style={styles.info}>
          <p>First Name: </p>
          <p>Last Name: </p>
          <p>E-mail: </p>
          <p>Change Password </p>
        </div>
      </div>
    </Tab>
    <Tab label="Variable categories" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Variable Expenses Categories</h2>
        <p>Categories List</p>
        <p>Create variable categories</p>
      </div>
    </Tab>
    <Tab label="Fixed categories" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Fixed Expense Categories</h2>
        <p>Categories List</p>
        <p>Add fix category</p>
      </div>
    </Tab>
  </Tabs>
);

export default ProfileTabs;