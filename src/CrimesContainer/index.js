import React, from 'react';


$.ajax({
    url: "https://data.austintexas.gov/resource/mfej-x5pm.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "odd1EDZh2iMLxWeO8rJrS3LNz"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});

