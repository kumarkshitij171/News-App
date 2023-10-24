import React from "react";
import loading from "./assets/loading.gif"

const Spinner = () => {
    const loadingstyle = {
        height: '23rem',
    }
    return (
        <div className="text-center">
            <img src={loading} alt="loading" style={loadingstyle} />
            <h4>Loading...</h4>
        </div>
    )
}

export default Spinner