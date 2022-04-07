import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as FavouritesActions from '../favourites/store/favourites.actions';
import { selectFavourites } from '../favourites/store/favourites.selector'

export default function Sidebar() {
    const favourites = useSelector(selectFavourites); // lettura store
    const dispatch = useDispatch(); // scrittura dello store
  return (
      <>
        <button onClick={() => dispatch(FavouritesActions.clear())}>Clear</button>
        <div>Sidebar; {JSON.stringify(favourites)}</div>
    </>
  )
}
