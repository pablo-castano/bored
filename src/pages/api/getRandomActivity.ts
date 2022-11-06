// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  fetch('http://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
}
