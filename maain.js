function showDefinition(parameter) {
    console.log(`Hovered over ${parameter}`);
  }
  
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 12.9507, lng: 77.5848 },
    });
  
    setMarkers(map);
  }
  
  const beaches = [
    ["Kengeri", 12.916522, 77.487958, 4],
    ["Malleshwaram", 13.009896, 77.574496, 5],
    ["Whitefield", 12.947619, 77.741800, 3],
    ["Banshankari", 12.897874, 77.554272, 2],
    ["Yelahanka", 13.111777, 77.578423, 1],
  ];
  
  function setMarkers(map) {
    const image = {
      url: "data:image/png;base64,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",
      size: new google.maps.Size(20, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32),
    };
  
    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
    };
  
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
  
      const marker = new google.maps.Marker({
        position: { lat: beach[1], lng: beach[2] },
        map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3],
      });
  
      // Add click event listener for each marker
      marker.addListener('click', function() {
        // Handle the click event by calling generateTemporaryContent
        const locationName = beach[0];
        const temporaryContentURL = generateTemporaryContent(locationName);
        openWebpage(temporaryContentURL);
      });
    }
  }
  
  window.initMap = initMap;
  
  function openWebpage(url) {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('No URL available for this location');
    }
  }
  
  function generateTemporaryContent(locationName) {
    switch (locationName) {
      case "Kengeri":
        return "https://jsfiddle.net/h_perumalla/5t9wy3pf/11/show";
      case "Malleshwaram":
        return "https://jsfiddle.net/h_perumalla/p9aqzk6v/11/show";
      case "Whitefield":
        return "https://jsfiddle.net/h_perumalla/v9mdjts6/12/show";
      case "Banshankari":
        return "https://jsfiddle.net/h_perumalla/urdz7vnf/6/show";
      case "Yelahanka":
        return "https://jsfiddle.net/h_perumalla/w81hzmb7/8/show";
      default:
        return "";
    }
  }
  