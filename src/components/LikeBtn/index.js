import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicReducer from '../../reducers/musicReducer';





const LikeBtn = () =>{
    

    const like = useSelector(state => {
        return state.like
    })
    
    const dispatch = useDispatch();
    

    const  handleClick = () => {
        if(like===0){
         dispatch({type: "ADDLIKE", payload: 1})
        }
         else{
        dispatch({type: "REMOVELIKE", payload: 1})
         }
    }


    const checkLikeCount = () =>{

        if(like==0){
            // console.log(like)
            // console.log("something")
            const something = handleClick
            return something
        }
    }


return(
    <div>
        <button aria-label="likebtn" onClick={handleClick }>
            like count: {like}
        </button>
    </div>

);
}

export default LikeBtn