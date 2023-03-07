import { useState } from "react";
import axios from "axios";
import useUser  from '../hooks/useUser';
const AdminDashboard = ({gamename, onArticleUpdated}) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addGame = async () => {
        
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};

        const response = await axios.post(`/api/games/${gamename}`, {
            postedBy: name,
            text: commentText,
        }, {
            headers,
        } );
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    
    }
    const {user} = useUser();

return (
    <>
    <div id="add-comment-form"> 
       {user 
       && <p>You are Logged in as {user.email}</p>
       }
       <div class="addgames">
        <h2>Add game data</h2>
       <textarea placeholder="Enter Game URL" value={commentText}  onChange={e => setCommentText(e.target.value)} rows="1" cols="100">Game URL</textarea>
        <br/>
        <textarea placeholder="Enter Game Title" value={name}  onChange={e => setName(e.target.value)} rows="1" cols="100">Game Title</textarea>
        <br/>
        <button class="upvotes-button" onClick={addGame}>Submit Game</button>
        </div>
    </div>
    
    </>
)
}
export default AdminDashboard;