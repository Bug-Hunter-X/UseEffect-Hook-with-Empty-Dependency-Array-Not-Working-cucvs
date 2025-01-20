```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount, thanks to the empty dependency array
    console.log('Mounted!');
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    console.log('Button clicked!');
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```