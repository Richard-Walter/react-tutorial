import { useState, useEffect } from 'react'

const useFetch = (url) => {

        //states
        const [data, setData] = useState(null)
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

        //runs every render e.g. state change.  useful for fetching data in a component and updating state such as database
        useEffect(() => {
            
            const abortCont = new AbortController();

            //simulate server request time
            setTimeout(()=> {
                fetch(url, {signal: abortCont.signal})
                    .then(res => {
                        console.log(res);
                        if (!res.ok){
                            throw Error('Could not fetch the data for that resource');
                        }
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
                        setData(data);
                        setIsPending(false);
                        setError(null); //reset error to null upon successful fetch in case there was a previous error
                    })
                    .catch((err)=> {
                        console.log(err.message);
                        if (err.name === "AbortError") {
                            //if we dont have this if check, then we are still updating the state when going to get an error updating state on an unmounted component
                            console.log('fetch aborted');
                        } else {
                            setIsPending(false);
                            setError(err.message);
                        }
                    })
                }, 1000);
            
            //aborts the fetch so we dont get an updating state on an unmounted component error.  The return statement is effectively a cleanup function
            return () => abortCont.abort();

        }, [url]);  //only changing name will run this function as it is now a dependency.  deleting a blog will not invoke the useEffect hook.
    

    return {data, isPending, error}
}

export default useFetch
