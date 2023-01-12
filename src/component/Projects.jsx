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
      <section className="all-cards">
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
              NCNEWS
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
      </section>
    </>
  );
};
