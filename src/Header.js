import React from 'react';
import "./Header.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className="Header">
            <nav>
          <ul>
              <li>Home</li>
              <li>About College<ArrowDropDownIcon/>
              <ul>
                  <li>Mission</li>
                  <li>Vision</li>
              </ul>
              </li>
              <li>Admission<ArrowDropDownIcon/>
              <ul>
                  <li>Admission Info</li>
                  <li>Admission Fee
                  <ul>
                  <li>Inter</li>
                  <li>UnderGraduate</li>
          </ul>
          </li>
          </ul>
          </li>
          <li>News and Events</li>
          <li>Quiz Exam</li>
       </ul> 
</nav>
            
        </div>
    );
}

export default Header;
