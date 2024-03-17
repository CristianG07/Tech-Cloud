import { HeartCard } from '../icons/HeartCard'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '@/redux/products/favoriteSlice'

export const ButtonFavorite = (product) => {
  const dispatch = useDispatch()
  const { favorites } = useSelector((state) => state.favorite)
  const isFavorite = favorites.some((favorite) => favorite.id === product.id)

  const toggleFavoriteHandler = (event) => {
    event.stopPropagation()
    if (isFavorite) {
      dispatch(removeFavorite(product.id))
    } else {
      dispatch(addFavorite(product))
    }
  }

  return (
    <button className='' onClick={toggleFavoriteHandler}>
      <HeartCard
        className={`${
          isFavorite ? 'fill-light_secondary' : 'lg:hover:fill-light_secondary'
        }`}
      />
    </button>
  )
}
