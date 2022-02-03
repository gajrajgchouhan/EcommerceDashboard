import React from "react";
import image from "../image/profille.jpg";

const nav = () => {
    return (
        <div className="flex ...">
            <div>
                <h1>Search</h1>
            </div>
            <div>
                <h1>Notify</h1>
            </div>
            <div>
                <img
                    src={image}
                    alt="image"
                    className="rounded-tl-2xl rounded-br-2xl w-8"
                />
            </div>
        </div>
    );
};
export default nav;
