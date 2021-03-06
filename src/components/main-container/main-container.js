import React from 'react';
// OTHER LIBRARIES
import PropTypes from 'prop-types';
// REACT-BOOTSTRAP
import { Button, Alert, Spinner } from 'react-bootstrap';
// REDUX
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// CUSTOM COMPONENTS
import FilterButtons from './filter-buttons';
import FlightList from '../flight-list/flight-list';

import scss from './main-container.module.scss';

const MainContainer = ({ counter, fiveMoreTickets }) => {
  const {
    loading, error, allTickets, checkBoxes,
  } = counter;
  const isEmptyArr = allTickets.length === 0;

  const hasData = !(!loading || error || isEmptyArr);
  const onSpinner = !loading
    ? (
      <div className={scss.spinnerPosition}>
        <Spinner
          className={scss.spinnerBorder}
          animation="border"
          variant="primary"
        />
      </div>
    ) : null;
  const onErrorMessage = error ? (
    <Alert className={scss.alertPosition} variant="danger">
      Ошибка сервера, перезапустите страницу!
    </Alert>
  ) : null;

  const onEmptyArr = !Object.values(checkBoxes).some((item) => item)
  && loading && !error ? (
    <Alert className={scss.alertPosition} variant="primary">
      Рейсов, подходящих под заданные фильтры, не найдено!
    </Alert>
    ) : null;

  return (
    <div className={scss.containerTickets}>
      <FilterButtons />
      {onSpinner}
      {onErrorMessage}
      {onEmptyArr}
      {hasData ? (
        <div>
          <FlightList />
          { !onEmptyArr
            && (
            <Button className={`${scss.btn} ${scss.btnFiveTickets}`} onClick={fiveMoreTickets} size="lg">
              Показать еще 5 билетов!
            </Button>
            )}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state,
});

MainContainer.propTypes = {
  counter: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    checkBoxes: PropTypes.objectOf(PropTypes.bool),
    allTickets: PropTypes.arrayOf(PropTypes.object),
  }),
  fiveMoreTickets: PropTypes.func,
};

MainContainer.defaultProps = {
  counter: {
    loading: false,
    error: false,
  },
  fiveMoreTickets: () => {
  },
};

export default connect(mapStateToProps, actions)(MainContainer);
