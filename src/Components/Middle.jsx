import React, { useState } from 'react';
import Right from './Right';

const Middle = ({ data }) => {
    const [rightdata, setRightData] = useState();
    const [viewMode, setViewMode] = useState('');

    function showRight() {

        if (window.innerWidth > 1880) {
            const card = document.getElementById('card');
            const right = document.getElementById('right');
            const imageimg = document.getElementById('imageimg');
            const image = document.getElementById('image');
            const infro = document.getElementById('info');
            card.style.width = "40%";

            card.style.flexDirection = "column";
            card.style.transitionDuration = "1s"
            card.style.height = "90%";

            infro.style.height = "20%";

            image.style.width = "100%";
            image.style.height = "100%";
            image.style.transitionDuration = "1s"

            imageimg.style.transitionDuration = "1s"
            imageimg.style.height = "20%";


            right.style.display = "block";
            right.style.width = "60%";
            right.style.transitionDuration = "1s"
        }


    }

    const handleView = (view) => {
        setRightData(data);
        setViewMode(view);
        showRight();
    };

    return (
        <>
            {data ? (
                <div id='card'>
                    <div className="image" id='imageimg'>
                        <img src={data.avatar_url} alt="Avatar" id='image' />
                    </div>
                    <div id="info">
                        <h2>@{data.login}</h2>
                        <h3>{data.name}</h3>
                        <h4>{data.followers} Followers
                            <button onClick={() => handleView('followers')}>View</button>
                        </h4>
                        <h4>{data.following} Following
                            <button onClick={() => handleView('following')}>View</button>
                        </h4>
                        <h4>{data.public_repos} Repositories
                            <button onClick={() => handleView('repos')}>View</button>
                        </h4>
                        <h4>{data.company}</h4>
                    </div>
                </div>
            ) : (
                <h1>No Data</h1>
            )}

            <div className="right" id='right'>
                <Right links={rightdata} viewmode={viewMode} USER={data.login} />
            </div>
        </>
    );
};

export default Middle;
