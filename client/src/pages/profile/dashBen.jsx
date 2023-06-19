/* eslint-disable no-unused-vars */
import { Nav } from "./Nav";
import { Aside } from "./Aside";
import { Main } from "./Main";

const DashBoard = (props) => {
  return (
    <>
      <div className="antialiased">
        <Nav />

        <Aside />
      </div>
    </>
  );
};
export default DashBoard;
