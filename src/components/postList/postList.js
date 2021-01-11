import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    postList: PropTypes.array,
    pageCount: PropTypes.number,
    pageIndex: PropTypes.number,
    onPageClick: PropTypes.func,
    onSearchClick: PropTypes.func,
};

PostList.defaultProps = {
    postList: [],
    pageCount: 0,
    pageIndex: 0,
    onPageClick: null,
    onSearchClick: null
};

function PostList(props) {
    const { postList, pageCount, pageIndex, onPageClick, onSearchClick } = props

    const [value, setValue] = useState('')
    const typingTimeoutRef = useRef(null)

    function handleSubmit(e) {
        const valueTemp = e.target.value
        setValue(valueTemp)
        if (onSearchClick) {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current)
            }

            typingTimeoutRef.current = setTimeout(() => {
                onSearchClick(valueTemp)
            }, 300);
        }
    }

    return (
        <div>
            <form >
                <input type='text' value={value} onChange={(e) => handleSubmit(e)}></input>
            </form>
            <ul>
                {postList.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={() => onPageClick(pageIndex - 1)} disabled={pageIndex === 1}>&lt;&lt;</button>
            <p>{pageIndex}</p>
            <button onClick={() => onPageClick(pageIndex + 1)} disabled={pageIndex === pageCount}>&gt;&gt;</button>
        </div>
    );
}

export default PostList;