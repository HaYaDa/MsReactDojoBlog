import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
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
   // outputting lists / Full React Tutorial 10 by The Net Ninja
   const [ blogs, setBlogs ] = useState([
    { title: 'My First React Ninja app', body: 'lorem ipsum...', author: 'HaYaDa', id: 1 },
    { title: 'Welcome to my Ninja friends...', body: 'lorem ipsum...', author: 'John Doe', id: 2 },
    { title: 'Wev Dev Top Tips', body: 'lorem ipsum...', author: 'HaYaDa', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }; 

        // useEffect hook / Full React Tutorial 14 by The Net Ninja
    useEffect( () => {
        console.log("useEffect() run...");
        console.log(blogs);
    });

    return ( 
        <div className="home">
            {/* /* Full React Tutorial 08 by The Net Ninja
            <h2>Homepage Online</h2>
            <p>{ name } is { age } years old...</p>
            <button onClick={clickHandler}>Click Me...</button>
             */
            /* Full React Tutorial 10 by The Net Ninja // bloglist-code is moved to its own BlogList component*/}
            <BlogList blogs={blogs} title="All Blogs..!" handleDelete={handleDelete}/>
            { <BlogList blogs={blogs.filter( blog => blog.author === 'HaYaDa' )} title={`${blogs[0].author}'s Blogs...`} handleDelete={handleDelete}  /> /*// template literals example */}
            
        </div>
     );
}
 
export default Home;
