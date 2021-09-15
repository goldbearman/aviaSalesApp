import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import PropTipes from 'prop-types';
import classes from './filter-list.module.scss';

import * as actions from '../redux/actions';

const FilterList = ({ counter, onCheck }) => {
  const { checkBoxes } = counter;

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
            defaultChecked={checkBoxes[10]}
            disabled={!counter.stop}
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
            defaultChecked={checkBoxes[0]}
            disabled={!counter.stop}
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
            defaultChecked={checkBoxes[1]}
            disabled={!counter.stop}
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
            defaultChecked={checkBoxes[2]}
            disabled={!counter.stop}
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
            defaultChecked={checkBoxes[3]}
            disabled={!counter.stop}
          />
          <span className={classes.check__box} />
          3 пересадки
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispathToProps = (dispatch) => ({
  onCheck: (idKey) => dispatch(actions.onCheckBox(idKey)),
});

FilterList.propTypes = {
  counter: PropTipes.arrayOf(PropTipes.object),
  onCheck: PropTipes.func,
};
FilterList.defaultProps = {
  counter: {},
  onCheck: () => {},
};

export default connect(mapStateToProps, mapDispathToProps)(FilterList);
