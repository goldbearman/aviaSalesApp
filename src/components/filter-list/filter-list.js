import React from 'react';
// OTHER LIBRARIES
import cn from 'classnames';
import PropTypes from 'prop-types';
// REDUX
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

import classes from './filter-list.module.scss';

const FilterList = ({ counter: { checkBoxes, stop }, onCheck }) => {
  const checkBoxArr = Object.keys(checkBoxes).map((key) => (
    <div key={key} className={classes.filter_list__item}>
      <label className={cn(classes.check, classes.option)}>
        <input
          className={classes.check__input}
          type="checkbox"
          checked={checkBoxes[key]}
          onChange={() => onCheck(key)}
          disabled={!stop}
        />
        <span className={classes.check__box} />
        {key}
      </label>
    </div>
  ));

  return (
    <div className={classes.filter_list}>
      <h1>количество пересадок</h1>
      {checkBoxArr}
    </div>
  );
};

FilterList.propTypes = {
  counter: PropTypes.shape({
    stop: PropTypes.bool,
    checkBoxes: PropTypes.objectOf(PropTypes.bool),
  }),
  onCheck: PropTypes.func,
};
FilterList.defaultProps = {
  counter: {
    stop: false,
    checkBoxes: {},
  },
  onCheck: () => {},
};

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispathToProps = (dispatch) => ({
  onCheck: (idKey) => dispatch(actions.onCheckBox(idKey)),
});

export default connect(mapStateToProps, mapDispathToProps)(FilterList);
