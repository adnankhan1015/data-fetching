    When using the fetch function for sending HTTP requests, you can check if the response is the error response
    response.ok true => // 200, 300 or false =? 400, 500

#### Things we need to do an HTTP request

// Todo: Fetch available places from backend API

// \* Fetch then returns a promise, which is a JS value that eventually resolve to another value. So basically a wrapper object around a value that is not there yet, but that will eventually be there

// ! When fetching data, its super common to have these 3 pieces of state work together
const [availablePlaces, setAvailablePlaces] = useState([]);
const [isFetching, setIsFetching] = useState(false);
const [error, setError] = useState();
