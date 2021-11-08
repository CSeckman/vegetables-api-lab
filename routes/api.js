import { Router } from 'express'
import * as vegetableCtrl from '../controllers/vegetables.js'
const router = Router()

router.get('/vegetables', vegetableCtrl.index)
router.get('/vegetables/:id', vegetableCtrl.show)
router.post('/vegetables', vegetableCtrl.create)
router.put('/vegetables/:id', vegetableCtrl.update)
router.delete('/vegetables/:id', vegetableCtrl.delete)

export {
  router
}
