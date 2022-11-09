// no need to import useState and useEffect, because we use and import it in useFetch.js 
// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch'; 

const Home = () => {
    // Destructuring data from useFetch.js (custom hook) - React 20 - The Net Ninja
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); 

    /* 
    // useState hook / Full React Tutorial 08 by The Net Ninja
    //define a reactive value for the component
    const [ name, setName ] = useState('inital Name'); 
    const [ age, setAge ] = useState(0); 
    
    const clickHandler = () => {
        console.log("...clicked...");
        setName('Hasan');
        setAge(age + 1);  
    } 
    */
   
    /* // outputting lists / Full React Tutorial 10 by The Net Ninja
   const [ blogs, setBlogs ] = useState([
    { title: 'My First React Ninja app', body: 'lorem ipsum...', author: 'HaYaDa', id: 1 },
    { title: 'Welcome to my Ninja friends...', body: 'lorem ipsum...', author: 'John Doe', id: 2 },
    { title: 'Wev Dev Top Tips', body: 'lorem ipsum...', author: 'HaYaDa', id: 3 }
    ]); */
    /*
    // Removed STATE block to useFetch.js (custom hook) - React 20 - The Net Ninja
    // Fetching Data with useEffect - React - 18 - The Net Ninja
    const [blogs, setBlogs] = useState(null); // We set the initial value to be NULL, than once we've successfully fetched the data, we update our state-data using setBlogs with the data we get back   
    
    // bit of state for LOADING Message - React - 18- Conditional Templating - The Net Ninja
    const [ isPending, setIsPending ] = useState(true); 

     // STORING the ERROR (fetch-block) in STATE => React - 19 - The Net Ninja
     const [ error, setError ] = useState(null);
    */

    /* Functionality removed @ end of #17 - Fetching Data with useEffect because this functionality replaced with Delete Request to db.json
    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }; 
    ALSO REMOVED, method as prop to component:
        { blogs && <BlogList blogs={blogs} title="All Blogs..!" handleDelete={handleDelete}/>}
        { blogs && <BlogList blogs={blogs.filter( blog => blog.author === 'HaYaDa' )} title={`${blogs[0].author}'s Blogs...`} handleDelete={handleDelete}  /> // template literals example  }
        */ 

    /* 
        // useEffect hook / Full React Tutorial 14 by The Net Ninja
    useEffect( () => {
        console.log("useEffect() run...");
        console.log(blogs);
    }); */

    // Fetching Data with useEffect - React - 18 - The Net Ninja
    // Remove following code to useFetch.js, for CREATING CUSTOM HOOK - React - 20 - The Net Ninja
     /*
    useEffect( () => {
        // Surround the fetch-code in a setTimeout to simulate a request, to show Loading Message longer
                
        setTimeout( () => {
            fetch('http://localhost:8000/blogs')
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
                console.log(data);
                setBlogs(data);
                // change state to disapper Loading Message after fetching data
                setIsPending(false); 
                // IF we get DATA than we SET ERROR in STATE to NULL
                setError(null); 
            })
            .catch( err => {
                console.log(err.message);
                // edit/update the ERROR in STATE
                setError(err.message); 
                setIsPending(false); 
            }); 
        }, 1000);           
    }, []) 
    */

    return ( 
        <div className="home">
            {/* /* Full React Tutorial 08 by The Net Ninja
            <h2>Homepage Online</h2>
            <p>{ name } is { age } years old...</p>
            <button onClick={clickHandler}>Click Me...</button>
             */ 
            }
            {/* Full React Tutorial 10 by The Net Ninja // bloglist-code is moved to its own BlogList component*/ }
            {/* ERROR HANDLING - CONTDITIONAL ERROR MESSAGE - Full React Tutorial 19 by The Net Ninja */ }
            { error && <div>{ error }</div>}            
            {/* CONDITIONAL TEMPLATING & CONDTIONAL LOADING MESSAGE - Full React Tutorial 18 by The Net Ninja */ }
            { isPending && <div><h1>Loading...</h1></div>} 
            { blogs && <BlogList blogs={blogs} title="All Blogs..!"/>}
            { blogs && <BlogList blogs={blogs.filter( blog => blog.author === 'HaYaDa' )} title={`${blogs[0].author}'s Blogs...`}/> /*// template literals example */ }

        </div>
     );
}
 
export default Home;

/* 
    

*/