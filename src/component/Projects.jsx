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
              manage the food they already have and avoid food waste.
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life" target="_blank" rel="noopener noreferrer">
                Frontend
              </a>
            </Button>
            <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life" target="_blank" rel="noopener noreferrer">
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
              <a href="https://github.com/rangararazin/Front-End-Food-Life" target="_blank" rel="noopener noreferrer">
                Frontend
              </a>
            </Button>
            <Button size="small">
              <a href="https://github.com/rangararazin/Front-End-Food-Life" target="_blank" rel="noopener noreferrer">
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
              Built with PHP and MySQL, Note app lets you create, read, update,
              and delete notes easily. My Note app simplifies note-taking and
              organization, enhancing productivity and efficiency.
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="https://github.com/rangararazin/php-beginners" target="_blank" rel="noopener noreferrer">Github</a>
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
              AWS S3 STATIC WEBSITE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              While navigating my journey through AWS Solution Architect, this
              website marks my initial step and project, deployed on AWS
              utilizing its S3 static website hosting feature.
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="http://mysitedemo.razinscloud.link" target="_blank" rel="noopener noreferrer">DEMO</a>
            </Button>
            <Button size="small">
              <a href="https://github.com/rangararazin/MystaticWebsite" target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card className="main-card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              PLAYWRIGHT DEMO
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The project focuses on implementing automated tests for web
              applications to ensure their functionality and reliability using Playwright with JavaScript/TypeScript.
            </Typography>
          </CardContent>
          <CardActions className="card-button">
            <Button size="small">
              <a href="https://github.com/rangararazin/myplaywright-demo-1" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Button>
          </CardActions>
        </Card>
      </section>
    </>
  );
};
