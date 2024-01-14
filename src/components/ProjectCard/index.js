import React from "react";

// local imports
import "./style.css";

// external imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaDiceD20 } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className='cardContainer'>
      <Card sx={{ maxWidth: 320 }} key={project.id} className='cardContent'>
        <CardMedia
          component='img'
          alt='placeholder drawings of travelers at different locations that match color pallette'
          height='140'
          image={project.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {project.title}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            {project.subtitle}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {project.description}
          </Typography>
          <Typography variant='h6'>Technologies Used</Typography>
          <ul id='tech-ul'>
            {project.technologies.map((tech, index) => (
              <Typography variant='body2' key={index} className='tech-li'>
                {tech}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions id='card-buttons'>
          <Button size='small' href={`${project.repo}`}>
            Github Repo
          </Button>
          <FaDiceD20 />
          <Button size='small' href={`${project.live}`}>
            Deployed Site
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
