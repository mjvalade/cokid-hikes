import React, { Component } from 'react';

export default class ZipSearch extends Component {


  render() {
    return(
      <section className="ZipSearch Aside Aside-2">
        <p>Search by zipcode</p>
        <input type="text" name="name" value="" placeholder="Enter zipcode"/>
        <input type="button" name="name" value="Search"/>
        <p>within</p>
        <input type="text" name="name" value="" placeholder="Miles"/>
        <input type="button" name="name" value="&#9660;"/>
      </section>
    )
  }
}
