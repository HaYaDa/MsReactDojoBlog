// MAKING CUSTOM HOOK - useFetch - React 20 - The Net Ninja
// IMPORT useState & useEffect from react - React 20 - The Net Ninja
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // Fetching Data with useEffect - React - 18 - The Net Ninja
    const [ data, setData ] = useState(null); // We set the initial value to be NULL, than once we've successfully fetched the data, we update our state-data using setBlogs with the data we get back   
    // bit of state for LOADING Message - React - 18- Conditional Templating - The Net Ninja
    const [ isPending, setIsPending ] = useState(true); 
    // STORING the ERROR (fetch-block) in STATE => React - 19 - The Net Ninja
    const [ error, setError ] = useState(null);

    useEffect( () => {
        // useEffect cleanUp - 24 - The NetNinja
        // create abortController to stop fetch if component changed or unmounts
        const abortCont = new AbortController(); 


        // Surround the fetch-code in a setTimeout to simulate a request, to show Loading Message longer
        setTimeout( () => {
            // adding signal property as a second argument - 24 - The Net Ninja
            fetch(url, { signal: abortCont.signal })
            .then(response => {
               console.log(response);
               if (!response.ok) {
                // access .statusText property of RESPONSE OBJECT
                console.log(`RESOURCE: ${response.statusText}`);
                // THROW ERROR with CUSTOM MESSAGE
                throw Error(`Could not FETCH the DATA for that RESOURCE...`);
               }
               return response.json() 
            })
            .then(data => {
                // console.log(data);
                setData(data);
                // change state to disapper Loading Message after fetching data
                setIsPending(false); 
                // IF we get DATA than we SET ERROR in STATE to NULL
                setError(null); 
            })
            .catch( err => {
                // console.log(err.message);
                // if it's an error caused by us(abortError) we dont want to update the STATE - 24- The Net Ninja
                if ( err.name === 'AbortError') {
                    console.log('fetch aborted...')
                } else {
                    // edit/update the ERROR in STATE
                    setError(err.message); 
                    setIsPending(false); 
                }
                
            }); 
        }, 1000);
        // place the cleanUp function
        return () => abortCont.abort(); 
    }, []);

    return { data, isPending, error }
}

export default useFetch 