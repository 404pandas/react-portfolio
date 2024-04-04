// external imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// local imports
import "./style.css";

const ProjectCard = (props) => {
  console.log("props", props);
  const { project } = props;

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={project.image}
          title={project.title}
        />
        <CardContent>
          <Typography
            className='expanded-text'
            gutterBottom
            variant='h5'
            component='div'
          >
            {project.title}
          </Typography>
          <Typography
            className='expanded-text'
            variant='body2'
            color='text.secondary'
          >
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          {project.deployment && (
            <Button size='small'>
              <a href={project.deployment}>Deployment</a>
            </Button>
          )}
          {project.code && (
            <Button size='small'>
              <a href={project.code}>Code</a>
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
