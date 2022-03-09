import React, { Component } from "react";
import './BirthDay.css'
import data from "./Data";
import List from "./List";

class Birthdays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      people1:data
    };
    
    this.clearAll = this.clearAll.bind(this);
    
  }
  async componentDidMount() {
    const readDataPeople = await this.readData();
    if (readDataPeople.length) {
      this.setState({ people: readDataPeople });
    }
  }

  async readData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(data));
    });
  }
 

  clearAll() {
    this.setState({ people: [] });
  }

  removeThisPerson = (id) => {
    this.setState({
      people: this.state.people.filter((peeps) => peeps.id !== id)    });
  };
  render() {
    return (
      <main>
        <section className="container">
          {
            <>
              <h3>{this.state.people.length} Birthdays Today</h3>
              <List
                people={this.state.people}              />
              <button onClick={this.clearAll}>Clear All</button>
              
            </>
          }
        </section>
      </main>
    );
  }
}

export default Birthdays;
