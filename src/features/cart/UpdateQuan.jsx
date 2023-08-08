import { useDispatch } from "react-redux"
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import { incQuan,decQuan } from '../cart/cartSlice';

UpdateQuan.propTypes = {
    pizzaId: PropTypes.number,
    currentQuan: PropTypes.number,
}

export default function UpdateQuan ({ pizzaId, currentQuan }) {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center gap-2 md:gap-3">
        <Button type="round" onClick={() => dispatch(decQuan(pizzaId))}>-</Button>
        <span className="text-sm font-medium">{currentQuan}</span>
        <Button type="round" onClick={() => dispatch(incQuan(pizzaId))}>+</Button>
        </div>
    )
}