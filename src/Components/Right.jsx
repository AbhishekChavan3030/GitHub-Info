import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Right = ({ links, viewmode, USER }) => {
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        if (USER) {
            axios
                .get(`https://api.github.com/users/${USER}/followers`)
                .then((response) => setFollowers(response.data))
                .catch((error) => {
                    console.error("Error fetching followers:", error);
                    setFollowers([]);
                });

            axios
                .get(`https://api.github.com/users/${USER}/following`)
                .then((response) => setFollowing(response.data))
                .catch((error) => {
                    console.error("Error fetching following:", error);
                    setFollowing([]);
                });

            axios
                .get(`https://api.github.com/users/${USER}/repos`)
                .then((response) => setRepositories(response.data))
                .catch((error) => {
                    console.error("Error fetching repositories:", error);
                    setRepositories([]);
                });
        }
    }, [USER]);

    return (
        <div id='rightcontainer'>
            {viewmode === "followers" && (
                <div id="followers">
                    <h2>Followers</h2>
                    {followers.length > 0 ? (
                        followers.map((ele) => (
                            <div className="followers" key={ele.id}  id='followerscard'>
                                <img src={ele.avatar_url} alt={`${ele.login}'s avatar`} />
                                <h3>{ele.login}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No followers found</p>
                    )}
                </div>
            )}

            {viewmode === "following" && (
                <div id="following">
                    <h2>Following</h2>
                    {following.length > 0 ? (
                        following.map((ele) => (
                            <div className="following" key={ele.id} id='followingcard'>
                                <img src={ele.avatar_url} alt={`${ele.login}'s avatar`} />
                                <h3>{ele.login}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No following found</p>
                    )}
                </div>
            )}

            {viewmode === "repos" && (
                <div id="repositories">
                    <h2>Repositories</h2>
                    {repositories.length > 0 ? (
                        repositories.map((ele) => (
                            <div className="repo" key={ele.id}>
                                <h3>{ele.name}</h3>
                                <p><a href={ele.html_url} target="_blank" rel="noopener noreferrer">Repository Link</a></p>
                                <p>{ele.description || "No description available"}</p>
                                <p>Visibility: {ele.visibility}</p>
                            </div>
                        ))
                    ) : (
                        <p>No repositories found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Right;
