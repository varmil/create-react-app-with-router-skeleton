import express from 'express';
import routes from '../src/pages/routes';

// TODO: リソースはハッシュでビルドされる ==> クライアント側とサーバ側で参照するリソースインスタンスが異なる？

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(3001, () => {
	console.log('Example app listening on port 3001!');
});
