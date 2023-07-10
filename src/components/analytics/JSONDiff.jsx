/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import ReactJsonViewCompare from 'react-json-view-compare';


// Or in ES6
class JSONDiff extends React.Component {
  render() {
    return <ReactJsonViewCompare splitView={true}
      oldData={this.props.oldValue} newData={this.props.newValue} />;
    // 'lastname' type is missing in props validation
  }
}
// JSONDiff.propTypes = {
//   oldValue: PropTypes.object.isRequired,
//   newValue: PropTypes.object.isRequired,
// };

export default JSONDiff;
