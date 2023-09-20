import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = () => {
  const greeting = useSelector(state => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h3>Random Greeting:</h3>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;