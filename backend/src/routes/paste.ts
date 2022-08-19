import { Request, Response, Router } from 'express';
import { DatabaseContext, Paste } from '../context.js';
import { nanoid } from 'nanoid';
import Joi = require('joi');

const router: Router = Router();

router.get('/api/paste/:id', async (req: Request, res: Response) => {
    if (!req.params.id) {
        return res.status(400).send('');
    }

    const db = new DatabaseContext();

    try {
        return res.status(200).send(JSON.stringify(db.getPaste(req.params.id)));
    } catch {
        return res.status(404).send('');
    }
});

const portPasteSchema = Joi.object({
    title: Joi.string()
        .max(128)
        .required(),

    text: Joi.string()
        .required(),

    description: Joi.string()
        .max(1024)
});
router.post('/api/paste', async (req: Request, res: Response) => {
    let result: Paste;
    try {
        result = Joi.attempt(req.body, portPasteSchema);
    } catch (e) {
        return res.status(400).send(e);
    }

    const db = new DatabaseContext();
    const id = nanoid();

    db.setPaste(id, result);
    res.status(200).send(id);
});

export default router;
