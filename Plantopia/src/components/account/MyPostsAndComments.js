import React, { useState } from 'react';
import '../../styles/pages/_mpac-ms.scss';
import '../../styles/pages/_footer.scss';
import Layout_seo from './Layout_seo.js';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MyPostsAndComments = () => {

// 포스트 목록 상태
const [posts, setPosts] = useState([
    { id: 1, text: 'abcdefg', isChecked: false },
    { id: 2, text: 'hijklmnop', isChecked: false },
    { id: 3, text: 'qrstuvwxyz', isChecked: false },

]);

// 체크박스 상태 업데이트
const handlePostCheckboxChange = (id) => {
    setPosts(posts.map(post =>
        post.id === id ? { ...post, isChecked: !post.isChecked } : post
    ));
};

// 삭제 버튼 클릭하면 포스트트 삭제
const handlePostDelete = () => {
    setPosts(posts.filter(post => !post.isChecked)); // 체크된 항목만 삭제
};

// ---------- ---------- ---------- ----------

// 댓글 목록 삭제
const [comments, setComments] = useState([
    { id: 1, text: '댓글댓글', inChecked: false },
    { id: 2, text: '댓글댓글댓글글', inChecked: false },
]);

// 댓글 상태 업데이트
const handleCommentCheckboxChange = (id) => {
    setComments(comments.map(comment =>
        comment.id === id ? { ...comment, isChecked: !comment.isChecked } : comment
    ));
};

// 삭제 버튼 클릭하면 댓글 삭제
const handleCommentDelete = () => {
    setComments(comments.filter(comment => !comment.isChecked)); // 체크된 항목만 삭제
};

// ---------- ---------- ---------- ----------

    return (
        <div className="mpac-ms-big-container">
        <Navbar />

        <div className="mpac-ms-small-container">
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}><Layout_seo />
        <div className="topline" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div className="green-text">My Posts & Comments</div>

            {/* 포스트 타이틀, 카운트 */}
            <div className="mp-ms-title-container" style={{ top: '25px' }}>
                <div className="mp-ms-title">My Posts</div>
                <div className="mp-ms-count">3</div>
                <div className="mp-ms-delete-button" onClick={handlePostDelete}>Delete</div> {/* 포스트 삭제 버튼 */}
            </div>

            {/* 댓글 타이틀, 카운트 */}
            <div className="mp-ms-title-container" style={{ top: '327px' }}>
                <div className="mp-ms-title">My Comments</div>
                <div className="mp-ms-count">2</div>
                <div className="mp-ms-delete-button" onClick={handleCommentDelete}>Delete</div> {/* 댓글 삭제 버튼 */}
            </div>

            {/* 포스트 내용 */}
            <div className="mp-ms-container" style={{ top: '57px' }}>
                {posts.map((post) => (
                    <div key={post.id}>
                        <input
                            type="checkbox"
                            id={`checkbox-${post.id}`}
                            checked={post.isChecked}
                            onChange={() => handlePostCheckboxChange(post.id)}
                        />
                         <label htmlFor={`checkbox-${post.id}`} style={{ marginLeft: '5px' }}>
                            {post.text}
                         </label>
                    </div>
                ))}
            </div>

            {/* 댓글 내용 */}
            <div className="mp-ms-container" style={{ top: '390px' }}>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <input
                            type="checkbox"
                            id={`checkbox-comment-${comment.id}`}
                            checked={comment.isChecked}
                            onChange={() => handleCommentCheckboxChange(comment.id)}
                        />
                        <label htmlFor={`checkbox-comment-${comment.id}`} style={{ marginLeft: '5px' }}>
                           {comment.text} 
                        </label>
                    </div>
                ))}
            </div>

            </div>
        </div>
        </div>
        <Footer />
        </div>
    );
};

export default MyPostsAndComments;
