import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from './components/Square';
import styles from './styles.module.scss'

class Board extends Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={this.handleClick}
        id={i}
      />
    )
  }

  handleClick = (i) => this.props.onClick(i)
  
  render() {
    return (
      <>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.object,
  onClick: PropTypes.func,
};

export default Board;
