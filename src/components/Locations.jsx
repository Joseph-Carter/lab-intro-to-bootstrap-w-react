import React from 'react';

const Locations = ({ locations }) => {
    return (
        <table>
            {Object.keys(locations).map((l) => {
                return <tr>
                    <td>{l}</td>
                    <td>{locations[l]}</td>
                </tr>
            })}
        </table>
    );
}

export default Locations;
