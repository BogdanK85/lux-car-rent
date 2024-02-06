const { useSelector } = require('react-redux');

const Favorite = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
};
