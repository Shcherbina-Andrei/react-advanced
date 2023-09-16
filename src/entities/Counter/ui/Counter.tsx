import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const counterValue = useSelector(getCounterValue);
  const incrementCount = () => {
    dispatch(counterActions.increment());
  };

  const decrementCount = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={incrementCount} data-testid="increment-button">{t('Increment')}</Button>
      <Button onClick={decrementCount} data-testid="decrement-button">{t('Decrement')}</Button>
    </div>
  );
};
