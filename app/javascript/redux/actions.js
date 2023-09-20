export const setGreeting = greeting => ({
    type: 'SET_GREETING',
    payload: greeting,
  });
  
  export const fetchRandomGreeting = () => {
    return dispatch => {
      fetch('/api/greetings/random')
        .then(response => response.json())
        .then(data => dispatch(setGreeting(data.greeting)));
    };
  };