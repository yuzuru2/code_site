/**
 * コアモジュール
 */
import * as Express from 'express';

/**
 * model
 */
import { select, insert } from 'src/mongoose/model/codes';

const route = '/api/v1';
export const v1 = (app: Express.Application) => {
  // search
  app.get(
    route + '/search',
    async (req: Express.Request, res: Express.Response) => {
      try {
        if (req.query.q === undefined) {
          res.sendStatus(500);
          return;
        }

        const _ret = await select(req.query.q);
        res.send({
          genreId: _ret[0]['genreId'],
          title: _ret[0]['title'],
          source: _ret[0]['source']
        });
      } catch (e) {
        res.sendStatus(500);
      }
    }
  );

  // 投稿
  app.post(
    route + '/post',
    async (req: Express.Request, res: Express.Response) => {
      try {
        if (req.body.genreId === undefined) {
          res.sendStatus(500);
          return;
        }
        if (req.body.title === undefined) {
          res.sendStatus(500);
          return;
        }

        if (req.body.source === undefined) {
          res.sendStatus(500);
          return;
        }

        // ハッシュ値生成用
        const s =
          'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        const _ret = await insert({
          id:
            [...Array(30)]
              .map(() => s[Math.floor(Math.random() * s.length)])
              .join('') + new Date().getTime(),
          genreId: Number(req.body.genreId),
          title: String(req.body.title),
          source: String(req.body.source),
          created_at: new Date(),
          updated_at: new Date()
        });

        res.send({
          q: _ret[0].id
        });
      } catch (e) {
        res.sendStatus(500);
      }
    }
  );
};
