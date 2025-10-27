import { Router } from 'express';
import * as comidasControllers from './../Controllers/comidasController.js'

const router = Router();

router.get('/', comidasControllers.listarTodos);
router.get('/:id', comidasControllers.listarUm);
router.post("/", comidasControllers.criar);
router.delete("/:id", comidasControllers.delete);
router.put("/:id", comidasControllers.atualizar)

export default router;