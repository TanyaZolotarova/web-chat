import { createSelector } from 'reselect';


export const usersBaseSelector = (state) => state.user;

// const user = useSelector((state: StateType) => state.user);
export const userSelector = createSelector(
    usersBaseSelector,
    (state)=> state.user
);
