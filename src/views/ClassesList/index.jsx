import React from "react";
import './styles.css';

import ClassCard from "./ClassCard";
import { connect } from "react-redux";

function ClassesList({ classes }) {
  return (
    <div className="classes-list">
      {classes.map(classData => (<ClassCard key={classData.id} classData={classData} />))}
    </div>
  )
}

const mapStateToProps = state => ({
  classes: state.classes.turmas
});

export default connect(mapStateToProps)(ClassesList);