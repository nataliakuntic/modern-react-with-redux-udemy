import useCounter from '../hooks/use-counter';
import Button from '../components/button';

function CounterPageOriginal({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPageOriginal;
