import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){
    const birdnests = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create New</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name"/>
            
            {/* Dropdown for category */}
            <select name="category">
                <option value="" disabled selected>Select Category</option>
                <option value="Library">Library</option>
                <option value="Framework">Framework</option>
                <option value="Video">Video</option>
                <option value="Document">Document</option>
            </select>
            
            <input type="text" name="description" placeholder="Description"/>
            <button>Create New</button>
        </Form>
    </div>
    {birdnests.map((birdnest) => <Post key={birdnest.id} post={birdnest}/>)}
    </>
}

export default Index;
