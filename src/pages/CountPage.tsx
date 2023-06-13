import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

type props = {
    initialCount: number;
};

function CountPage({ initialCount }: props) {
    const { count, increment } = useCounter(initialCount);

    return (
        <>
            <div>CountPage</div>
            <h1>{`count is ${count}`}</h1>
            <Button onClick={() => increment()} primary outline>
                Click
            </Button>
        </>
    );
}

export default CountPage;
