import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicReducer from '../../reducers/musicReducer';





const LikeBtn = () =>{
    
    const like = useSelector(state => {
        return state.like
    })
    console.log(like)
    const dispatch = useDispatch();
    

    const  handleClick = () => {
         dispatch({type: "ADDLIKE", payload: 1})
    }
   console.log(handleClick)

    const checkLikeCount = () =>{
        if(like==0){
           handleClick
        }
    }


return(
    <div>
        <button aria-label="likebtn" onClick={handleClick}>
            like count: {like}
        </button>
    </div>

);
}

export default LikeBtn