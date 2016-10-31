import React, { Component } from 'react';

export default class ZipSearch extends Component {


  render() {
    return(
      <section className="ZipSearch Aside Aside-2">
        <p>Search for hikes near your zipcode</p>
        <input type="text" name="name" value="" className="ZipInputs" placeholder="Enter zipcode"/>
        <p>within</p>
        <input type="text" name="name" value="" className="ZipInputs" placeholder="Miles"/>
        <input type="button" name="name" value="&#9660;"/>
        <input type="button" name="name" value="Search" className="ZipInputs"/>
      </section>
    )
  }
}
