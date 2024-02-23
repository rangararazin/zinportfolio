import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const Projects = () => {
  return (
    <>
      <section className="all-cards" >
        <Card className="main-card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              FOODLIFE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An app build on React Native which finds recipes based on the
              user’s available ingredients helping using to track, organize and
              manage the food they already have and avoid food waste
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life">
                Frontend
              </a>
            </Button>
            <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life">
                Backend
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card className="main-card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              NC NEWS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A news website built with React which has functionality like
              viewing articles, sorting and filtering the articles, up vote them
              and add/delete comments.
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life">
                Frontend
              </a>
            </Button>
            <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life">
                Backend
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card className="main-card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              NOTE APP
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Built with PHP and MySQL, Note app lets you create, read, update, and delete notes easily. My Note app simplifies note-taking and organization, enhancing productivity and efficiency.
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="https://github.com/rangararazin/php-beginners">
                Github
              </a>
            </Button>
            {/* <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life">
                Backend
              </a>
            </Button> */}
          </CardActions>
        </Card>

        <Card className="main-card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              STATIC WEBSITE HOSTING USING AWS
            </Typography>
            <Typography variant="body2" color="text.secondary">
            While navigating my journey through AWS Solution Architect, this website marks my initial step and project, soon to be deployed on AWS utilizing its S3 static website hosting feature.
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="">
                Coming Soon...
              </a>
            </Button>
            {/* <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life">
                Backend
              </a>
            </Button> */}
          </CardActions>
        </Card>
      </section>
    </>
  );
};
