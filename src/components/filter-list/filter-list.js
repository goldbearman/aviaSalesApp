import React from 'react';
// OTHER LIBRARIES
import cn from 'classnames';
import PropTypes from 'prop-types';
// REDUX
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

import classes from './filter-list.module.scss';

const FilterList = ({ counter, onCheck }) => {
  const { checkBoxes, stop } = counter;

  return (
    <div className={classes.filter_list}>
      <h1>количество пересадок</h1>
      <div className={classes.filter_list__item}>
        <label className={cn(classes.check, classes.option)}>
          <input
            className={classes.check__input}
            type="checkbox"
            checked={checkBoxes[10]}
            onChange={() => onCheck(10)}
            disabled={!stop}
          />
          <span className={classes.check__box} />
          Все
        </label>
      </div>
      <div className={classes.filter_list__item}>
        <label className={cn(classes.check, classes.option)}>
          <input
            className={classes.check__input}
            type="checkbox"
            checked={checkBoxes[0]}
            onChange={() => onCheck(0)}
            disabled={!stop}
          />
          <span className={classes.check__box} />
          Без пересадок
        </label>
      </div>
      <div className={classes.filter_list__item}>
        <label className={cn(classes.check, classes.option)}>
          <input
            className={classes.check__input}
            type="checkbox"
            checked={checkBoxes[1]}
            onChange={() => onCheck(1)}
            disabled={!stop}
          />
          <span className={classes.check__box} />
          1 пересадка
        </label>
      </div>
      <div className={classes.filter_list__item}>
        <label className={cn(classes.check, classes.option)}>
          <input
            className={classes.check__input}
            type="checkbox"
            checked={checkBoxes[2]}
            onChange={() => onCheck(2)}
            disabled={!stop}
          />
          <span className={classes.check__box} />
          2 пересадки
        </label>
      </div>
      <div className={classes.filter_list__item}>
        <label className={cn(classes.check, classes.option)}>
          <input
            className={classes.check__input}
            type="checkbox"
            checked={checkBoxes[3]}
            onChange={() => onCheck(3)}
            disabled={!stop}
          />
          <span className={classes.check__box} />
          3 пересадки
        </label>
      </div>
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
