import React, { useState } from 'react';

const LikeBtn = () =>{
    const [likeCount, setLikeCount] = useState('')

    const checkLikeCount = () =>{
        if(likeCount==0){
            setLikeCount(likeCount+1)
        }else{
            setLikeCount(likeCount-1)
        }
    }
return(
    <div>
<button aria-label="likebtn" onClick={checkLikeCount}>
    like count: {likeCount}
</button>

</div>

);
}

export default LikeBtn