import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import DashboardExpenses from '../../Components/DashboardExpenses';
import MonthFolders from '../../Components/MonthFolders';
import Footer from '../../Components/Footer';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="wrapper">
          <div className="MonthFolders">
            <MonthFolders />
          </div>
          <div className="ExpensesTable">
            <p>Recent Expenses</p>
            <DashboardExpenses /><br/>
            <div className="wrapper">
              <FlatButton label="Add Expenses" style={{backgroundColor: "#0DFF83" }}/>
              <FlatButton label="View more..." style={{backgroundColor: "#0DFF83" }}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default Dashboard;