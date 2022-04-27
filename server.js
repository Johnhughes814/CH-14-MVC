const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./controllers');
const helpers = require('./util/helpers');
const exhbs = require('express-handlebars');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3003;

const objSessions = {
  secret: 'seakritter',
  cookie: { },
  saveUninitialized: true,
  resave: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(objSessions));

const hbs = exhbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(
    `Listening on PORT ${PORT}`
  ));
});