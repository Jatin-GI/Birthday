import { createContext, useContext, useReducer, useEffect } from 'react';

const TripContext = createContext();

const initialState = {
  trips: [],
  currentTrip: null,
};

function tripReducer(state, action) {
  switch (action.type) {
    case 'SET_TRIPS':
      return { ...state, trips: action.payload };
    case 'ADD_TRIP':
      return { ...state, trips: [...state.trips, action.payload] };
    case 'SET_CURRENT_TRIP':
      return { ...state, currentTrip: action.payload };
    default:
      return state;
  }
}

export function TripProvider({ children }) {
  const [state, dispatch] = useReducer(tripReducer, initialState);

  useEffect(() => {
    const savedTrips = localStorage.getItem('trips');
    if (savedTrips) {
      dispatch({ type: 'SET_TRIPS', payload: JSON.parse(savedTrips) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(state.trips));
  }, [state.trips]);

  return (
    <TripContext.Provider value={{ state, dispatch }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  return useContext(TripContext);
}