import { Router } from 'express'
import items from './item.controllers'

const router = Router()
router
  .route('/')
  .get(items.getMany)
  .post(items.createOne)

router
  .route('/:id')
  .get(items.getOne)
  .put(items.updateOne)
  .delete(items.removeOne)
export default router
