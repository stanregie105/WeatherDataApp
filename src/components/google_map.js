import React, { Component} from 'react';

class GoogleMap extends Component {
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
         zoom: 12,
         center: {
             lat: this.props.lat,
             lng: this.props.lon
         }
        
        });
    }
  render(){
      // ref lets us get direct reference to a html element that has been rendered to the page
      return <div ref="map"/>
  }
}

export default GoogleMap;