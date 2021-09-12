import React from 'react';

import CenteredTabs from './AppBar';

class ViewEmployeeInterface extends React.Component {
  render() {
    return (
      <div>
        
        <br></br>
        <div style = {AppBarStyles}>
          <CenteredTabs/>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeInterface;



const AppBarStyles = {
  marginTop: '30px',
  marginLeft: '35%'
}