import React from 'react';
import "./Contact.css";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';

function Contact() {
    return (
        <div className="Contact">
            <h3>CONTACT INFORMATION</h3>
            <p><RoomIcon/>ADDRESS:<br></br>
Toyenbee Circular Rd, Dhaka 1000<br></br>
<PhoneIcon/>PHONE:<br></br>
02-7192325<br></br>
<EmailIcon/>EMAIL:<br></br>
notredamecollege2@gmail.com<br></br>
<ScheduleIcon/>WORKING DAYS/HOURS:<br></br>
Mon - Sun / 9:00 AM - 8:00 PM</p>
            
        </div>
    );
}

export default Contact;
