import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    //STATES
    //we are using our own custom hook useFetch to retrieve json data
    //desconstructing dictionary.  The colon allows you to rename the variable.  In this case re-can reference the returned data as blogs
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (

        <div className="home">
            {/* error handling for fetching data */}
            {error && <div>{error}</div>}
            {/* pass data from parent componenet to child component using props*/}
            {/* need to check we have data before rendering because the inital fetch takes time while the render method is intially called with blogs == null */}
            {blogs && <BlogList blogs={blogs} title='All Blogs'></BlogList>}
            {/* show loading method until fetch is complete */}
            {isPending && <div>loading .... </div>}
        </div>
    );
}

export default Home;