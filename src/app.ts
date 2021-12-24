import express, {Application, Request, Response } from 'express';
import routes from './routes/messages';

const app: Application = express();

/**Routes */
app.use('/', routes);

/**Error handlers */
app.use((req: Request, res: Response) => {
    const error = new Error('Not found');
    res.status(404).json({message: error.message
    });
});

const PORT:unknown | number = process.env.PORT || 3000;

app.listen(PORT, () => console.log('listening on port ' + PORT))