import express, { Request, Response } from 'express';
import cors from 'cors';
import { Client } from '@elastic/elasticsearch';

const app = express();
const port = 3001;

app.use(cors());

const client = new Client({ node: 'http://localhost:9200' });

app.get('/logs', async (req: Request, res: Response) => {
  const query = req.query.query as string || '';
  try {
    const result = await client.search({
      index: 'filebeat-*',
      query: {
        match: { message: query }
      },
      size: 100
    });

    res.json(result.hits.hits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Elasticsearch query failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
