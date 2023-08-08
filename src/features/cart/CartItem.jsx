import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import DeleteItem from '../cart/DeleteItem'
import UpdateQuan from './UpdateQuan';
import { getCurrentQuanById } from './cartSlice';

CartItem.propTypes = {
  item: PropTypes.object,
  pizzaId: PropTypes.object,
  name: PropTypes.object,
  quantity: PropTypes.object,
  totalPrice: PropTypes.object,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuan = useSelector(getCurrentQuanById(pizzaId))

  const dispatch = useDispatch()

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuan pizzaId={pizzaId} currentQuan={currentQuan} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
