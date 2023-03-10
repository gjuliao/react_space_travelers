import React from 'react';
import { useSelector } from 'react-redux';

const MyMission = () => {
  const myMission = useSelector((state) => state.mission);

  const filter = myMission.filter((el) => el.reserved);

  return (
    <div>
      <h2 className="group-title">My Missions</h2>
      { filter.map((el) => (
        <div className="item-border" key={el.mission_id}>
          {el.mission_name}
        </div>
      ))}
    </div>
  );
};

export default MyMission;
