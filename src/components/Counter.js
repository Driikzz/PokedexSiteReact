export default function Counter(counter){
    const [count, setCount] = useState(0);
    
    return <>
        <p>{count}</p>
        <MyButton varCount={count} funcSetCount={setCount} />
    </>
}