const BlogList = ( { blogs, title, handleDelete} ) => {
    /* // First approuch before we change to destructuring props: 
    const BlogList = ( props ) => { 
        const blogs = props.blogs;
    const title = props.title;  */
    

    // just for see contained data in props and blogs
    // console.log(props, blogs);
    // console.log(blogs[0].author);

    return ( 
        <div className="blog-list">
        <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={ blog.id }>
                    <h2 className="preview-title">{ blog.title }</h2>
                    <p className="preview-author">Written by { blog.author }</p>
                    <button onClick = {() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;