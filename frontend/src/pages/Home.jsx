import {Link} from 'react-router-dom';

function Home(){

    return(
        <div className='text-center mt-10'>
        <h1 className='text-3xl font-bold'>Welcome to Travel Explorer</h1>
        <p className='mt-4'>Discover amazing travel experience around the world.</p>
        <Link to="/destinations" className='mt-6 inline-block  bg-blue-500 text-white rounded px-4 py-2 '>
        Explore Now
        </Link>
        </div>
    );

}

export default Home;