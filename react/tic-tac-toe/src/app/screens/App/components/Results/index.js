import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userPropType } from 'constants/propTypes'
import actions from 'redux/results/actions';
import CustomTable from './components/CustomTable';
import Button from './components/Botton';
import styles from './styles.module.scss';

class Result extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getResults())
  }

  handleOnClick = () => {
    this.props.history.goBack();
  }

  render(){
    return (
      <>  
        <Button className={styles.backButton} icon="fas fa-arrow-alt-circle-left" onClick={this.handleOnClick} />
        <h2 className={styles.title}>Players positions</h2>
        {
          this.props.positions.length ? (
            <div className={styles.containerTable}>
              <CustomTable data={this.props.positions} title={Object.keys(this.props.positions[0])} />
            </div>
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )
        }
      </>
    )
  }
}

const mapStateToProps = ({ results: { positions }}) => ({
  positions
});

Result.propTypes = { 
  positions: PropTypes.arrayOf(userPropType)
}

export default connect(mapStateToProps)(Result);
