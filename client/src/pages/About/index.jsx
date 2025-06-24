// external imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// local imports
import "../../assets/css/about.css";
const images = [
  "https://i.imgur.com/BQIb9su.jpg",
  "https://i.imgur.com/FzMG846.jpg",
  "https://i.imgur.com/LQpeA7B.jpg",
  "https://i.imgur.com/vNqUGEw.jpg",
  "https://i.imgur.com/NWDMGYc.jpg",
];

const About = () => {
  return (
    <>
      <Container>
        <Grid container id='about-cont'>
          <Grid item xs={12} className='about-sect' id='first'>
            <p className='about-p'>
              Born in Sioux Falls, SD, I was born with the innate desire and
              passion to help animals. Growing up, I was constantly trying to
              rescue every animal I could find. My childhood family consists of
              my mother, father, and brother.
            </p>
            <img
              className='about-imgs'
              src='https://i.imgur.com/BQIb9su.jpg'
              alt='family'
            />
          </Grid>
          <Grid item xs={12} className='about-sect'>
            <p className='about-p'>
              Naturally, upon graduating high school I went to college for
              Zoology and Veterinary Technology. A defining point in my life was
              when I began work as a Veterinary Technician with my childhood
              hero, Veterinarian Dayton Williams. Unfortunately, alcoholism and
              trauma hit hard and fast shortly after.
            </p>
            <img
              className='about-imgs'
              src='https://i.imgur.com/FzMG846.jpg'
              alt='veterinary'
            />
          </Grid>
          <Grid item xs={12} className='about-sect'>
            <p className='about-p'>
              Upon identifying that I am an alcoholic, I entered a 30 day
              rehabilitation center. With alcohol no longer holding me back I
              decided to accomplish my life-long dream of living near a beach
              and moved to Port St Lucie, Florida.
            </p>
            <img
              className='about-imgs'
              src='https://i.imgur.com/LQpeA7B.jpg'
              alt='beach'
            />
          </Grid>
          <Grid item xs={12} className='about-sect'>
            <p className='about-p'>
              Love soon struck I like a lightning bolt. In Florida I grew close
              to my future husband. Early in life I was diagnosed with medical
              issues that would make conceiving, carrying, and delivering a
              child near impossible. Despite all this, my husband and I found
              out we were expecting a little girl. On February 12, 2021,
              Yennefer entered our lives.
            </p>
            <img
              className='about-imgs'
              src='https://i.imgur.com/vNqUGEw.jpg'
              alt='baby'
            />
          </Grid>
          <Grid item xs={12} className='about-sect'>
            <p className='about-p'>
              Because of the difficult pregnancy and delivery, I became
              physically disabled. Identifying that I could no longer physically
              be a veterinary technician, I went back to school for Computer
              Science. Now, I enjoy working remotely from Knoxville, Tennessee
              in pajamas and watching Bluey for the 200th time while being a
              full time mom.
            </p>
            <img
              className='about-imgs'
              src='https://i.imgur.com/NWDMGYc.jpg'
              alt='computer'
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
