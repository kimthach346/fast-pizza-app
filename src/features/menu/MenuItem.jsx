import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuanById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateQuan from '../cart/UpdateQuan';

MenuItem.propTypes = {
  pizza: PropTypes.object,
  id: PropTypes.object,
  name: PropTypes.object,
  unitPrice: PropTypes.object,
  ingredients: PropTypes.object,
  soldOut: PropTypes.string,
  imageUrl: PropTypes.object,
};

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch()

  const currentQuan = useSelector(getCurrentQuanById(id))

  const addToCart = () => {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

        {currentQuan > 0 && <div className='flex items-center gap-3 sm:gap-8'>
          <UpdateQuan pizzaId={id} currentQuan={currentQuan} />
          <DeleteItem pizzaId={id} />
        </div>}

        {!soldOut && currentQuan === 0 &&
          <Button type="small" onClick={addToCart}>Add to cart</Button>
        }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
