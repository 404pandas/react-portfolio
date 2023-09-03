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

          <Typography variant='body2'>{project.technologies}</Typography>
        </CardContent>
        <CardActions id='card-buttons'>
          <Button size='small' href={`${project.repo}`}>
            Github Repo
          </Button>
          <Button size='small' href={`${project.live}`}>
            Deployed Site
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
