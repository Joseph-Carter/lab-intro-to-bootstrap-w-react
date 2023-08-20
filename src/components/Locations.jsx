import React from 'react';

const Locations = ({ locations, setPosts, postData }) => {

    const filterLocations = (l) => {
        setPosts(postData.filter((post) => post.location === l ))
    }

    return (
        <table>
            <th>
                <tr>
                <td>Locations</td>
                <td>Posts</td>
                </tr>
            </th>
            <tbody>
            {Object.keys(locations).map((l) => {
                return ( 
                <tr onClick={() => filterLocations(l)}>
                    <td>{l}</td>
                    <td>{locations[l]}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default Locations;
