import passport from 'passport';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const modelPortfoliosController = controllers && controllers.modelPortfolios;

export default (app) => {

  if (usersController) {
    app.post('/login', usersController.login);
    app.post('/register', usersController.register);
    app.post('/logout', usersController.logout);
    app.post('/sendverify', usersController.sendverify);
  }

  if (modelPortfoliosController) {
    app.get('/modelPortfolio', modelPortfoliosController.all);
    app.post('/modelPortfolio/:id', modelPortfoliosController.add);
    app.put('/modelPortfolio/:id', modelPortfoliosController.update);
    app.delete('/modelPortfolio/:id', modelPortfoliosController.remove);
  }

  if (passportConfig && passportConfig.google) {
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }

};
