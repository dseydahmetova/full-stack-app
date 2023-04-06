const express = require('express')

const router = express.Router()

const placeControl = require('../controllers/placeController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')



// index
router.get('/', placeControl.index)

// create
router.post('/', authorize, placeControl.create)

//save
router.put('/', authorize, placeControl.save)

// seed 
router.get('/seed', placeControl.seed)

//search
router.get('/search', placeControl.search)

// delete
router.delete('/:id', authorize, confirmUserAccess, placeControl.delete)

// update
router.put('/:id', authorize, confirmUserAccess, placeControl.update)

// show
router.get('/:id', placeControl.show)

//like
router.put('/:id/likePlace', placeControl.like)

//getSaved
router.get("/savedPlaces/ids/:id", authorize, placeControl.getSavedPlaces)

//showSaved
router.get("/savedPlaces/:id", authorize, placeControl.showSavedPlaces)

//deleteSaved
router.delete("/savedPlaces/:userId/:placeId", authorize, confirmUserAccess, placeControl.deleteSavedPlaces)






// EXTRA ROUTES (for destinations)

// router.post('/:id', flightController.createDest)

// router.delete('/:id/dest/:destId', flightController.deleteDest)

// router.put('/:id/dest/:destId', flightController.updateDest)

// router.get('/:id/dest/:destId', flightController.editDest)



module.exports = router