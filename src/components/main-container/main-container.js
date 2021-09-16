import React from 'react';
import { Button, Alert, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterButtons from './filter-buttons';
import FlightList from '../flight-list/flight-list';
import scss from './main-container.module.scss';
import * as actions from '../redux/actions';

const MainContainer = ({ counter, fiveMoreTickets }) => {
  const { loading, error } = counter;
  const isEmptyArr = counter.filterArr.length === 0;

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

  const onEmptyArr = !Object.values(counter.checkBoxes).some((item) => item)
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
          <Button className={`${scss.btn} ${scss.btnFiveTickets}`} onClick={fiveMoreTickets} size="lg">
            Показать еще 5
            билетов!
          </Button>
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
    filterArr: PropTypes.arrayOf(PropTypes.object),
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
