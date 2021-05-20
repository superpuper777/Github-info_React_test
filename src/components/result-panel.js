import React from 'react';
import './result-panel.scss'

const ResultPanel = (props) => {
  return (
    <div className="result__panel">
      <div className="result__panel-left">
        {props.left}
      </div>
      <div className="result__panel-right">
        {props.right}
      </div>
    </div>
  )
}

export default ResultPanel;