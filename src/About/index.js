import React, { Component } from 'react';


class About extends Component {
    render(){
        return(
<div class="about">
<h1> Wenotme </h1>

<h2>  What's the story? </h2>

Project Wenotme is an application that will allow you to track and post incidents as they occur. You will be able to retrieve live data from your police department that let's you know what crimes have been committed, where, and when. 

<h2> Phase 1 </h2>

In phase 1 we are capturing the ability to see what crimes occured, when and where. You also have the ability to take a picture of a crime in progress and upload the picture so that it will aid citizens in protecting their neighborhoods and potentially assist police in their investigations. 

<h2> Phase 2 </h2>

Phase 2 will bring about a fully integrated chat application. This chat feature will allow you to find users in your area. This will aid you in traveling distances that are too short to drive, but long enough for something to happen. Phase 2 will also bring about alert notifications based on your location and current time to let you know what if any are prominent crimes.

</div>
       )}
}

export default About;