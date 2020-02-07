import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import placeholderImage from "../../images/notfoundlogo.png";
import Button from "../Button";
import API from "../../utils/API";

// Exporting both JobList and JobListItem from this file

// JobList renders a bootstrap list item
export function FavList({ children }) {
  
  return <ul className="list-group">{children}</ul>;
}

export function rmvButtonClick(svdJobData) {
  API.removeSavedJob(svdJobData.id)
  console.log("this is id: "+ svdJobData.id)
}

// JobListItem renders a bootstrap list item containing data from the recipe api call
export function FavListItem({
  thumbnail = placeholderImage,
  title,
  company,
  location, 
  description,
  salary,
  href,
  id,
  provider
}) {
  const profile = JSON.parse(localStorage.getItem('user'))
  const username = profile.username

  const svdJobData = {
    thumbnail,
    title,
    company,
    location, 
    description,
    salary,
    href,
    id,
    username,
    provider
  }

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-7 sm-8">
            <h3>{title}</h3>
            <div>Provider: {provider}</div>
            <div>Company: {company}</div>
            <div>Location: {location}</div>
            <div> {description? `Description: ${description}`: null} </div>
            <div> {salary? `Salary: ${salary}`: null} </div>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to job!
            </a>
          </Col>
          <Col size="xs-1 sm-1">
          <Button className ="btn btn-lg custom-button" key={id} onClick={()=> rmvButtonClick(svdJobData)}>Remove</Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}