// import { connect } from "react-redux";
import React, { useCallback } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from "redux";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter
      number={number}
      // onIncrease={() => dispatch(increase())}
      // onDecrease={() => dispatch(decrease())}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   { increase, decrease }
// )(CounterContainer);

export default CounterContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
