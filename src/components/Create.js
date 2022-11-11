// import useState for input fields - #27 - the NetNinja
import { useState } from 'react'; 
// import useHistory - PROGRAMMATIC REDIRECTS - #30- the NetNinja
import { useHistory } from 'react-router-dom'; 

const Create = () => {
    const [ title, setTitle ] = useState(""); 
    const [ body, setBody ] = useState("");
    const [ author, setAuthor ] = useState("Select an author...");
    // create isPending state for LOADING, initially false - #29 - the NetNinja
    const [ isPending, setIsPending ] = useState(false); 
    // invoke useHistory (creating history object) - #30 - the NetNinja
    const history = useHistory(); 

    // handleSubmit - React #28 - Submit events - The NetNinja
    // define the handleSubmit method
    const handleSubmit = (e) => {
        // prevent the default action -> prevent the page refresh when button is clicked
        e.preventDefault();
        // Create a blog object -> this will later saved in our db.json(json file with our blogs, like database)
        const blog = { title, body, author };
        // set isPending to true for LOADING message -> #29 - The NetNinja
        setIsPending(true); 

        // console.log(blog);
        // MAKING A POST REQUEST - React #29 - The Net Ninja
        // make fetch request to the blogs endpoint - http://localhost:8000/blogs
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog created and added...');
            console.info(blog); 
            // set isPending to false after fetching - #29 - the NetNinja
            setIsPending(false);
            // once the blog is added, than we push the user to the homepage
            history.push('/');  
        })


    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    // following two properties are for 2-way binding -> state updates input & input updates the state
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                    placeholder="The title of the new blog..."
                    />
                <label>Blog Body:</label>
                <textarea 
                    value={ body }
                    onChange={ (e) => setBody(e.target.value)}
                    required
                    placeholder="The body of the new blog..."
                ></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={ (e) => setAuthor(e.target.value)}>
                    <option value="Select an author..." disabled>Select an author...</option>
                    <option value="HaYaDa">HaYaDa</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Doe">Jane Doe</option>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding New Blog...</button>}
            </form>
            <h1>{ title }</h1>
            <h1>{ body }</h1>
            <h1>{ author }</h1>

        </div>
     );
}
 
export default Create;