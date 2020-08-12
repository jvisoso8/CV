import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <span key={projects.title} className="columns portfolio-item">
           <div className="item-wrap" style={{ width: "450px",
               margin: "auto"}}>
            <a href={projects.url} title={projects.title} >
               <img  alt={projects.title} src={projectImage} />
               <span className="overlay">
                  <span className="portfolio-item-meta">
                 <h3>{projects.title}</h3>
                     <h4>{projects.category}</h4>
                  </span>
                </span>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </span>
      })
    }

    return (
      <section id="portfolio">

      <div className=" ">

         <div className="  ">

            <h1 style={{fontSize:"25px"}}>Check Out Some of My Work.</h1>

            <div id="portfolio-wrapper" className="" style={{display: "flex", flexWrap: " wrap", margin: "5%"}}>
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
