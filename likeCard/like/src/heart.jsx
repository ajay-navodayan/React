import { useState } from "react";
export default function Heart() {
    const [isLike, setIsLike] = useState(false);
    const toggleLike = () => {
        setIsLike(!isLike);
    };
    let likeStyle = { color: "red" };
    return (
        <div>
            <p onClick={toggleLike}>
                {isLike ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}

// comment