import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

app.listen(process.env.PORT || 5001, function () {
	var port = process.env.PORT || 5001;
    console.log('Running on http://localhost:'+ port +'!');
});