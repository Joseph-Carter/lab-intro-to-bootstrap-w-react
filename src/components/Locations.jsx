import React from "react";

const Locations = ({ locations, setPosts, postData, setQuery }) => {
  const filterLocations = (l) => {
    setPosts(postData.filter((post) => post.location === l));
    setQuery(l);
  };

  return (
    <div className="col">
      <table>
        <th>
          <tr>
            <td>Post by <span style={{ color: 'gold'}}>locations</span></td>
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
    </div>
  );
};

export default Locations;
