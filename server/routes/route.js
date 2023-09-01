const router = require('expres').Router();
const controller = require('../controllers/controller');
const middlewares = require('../middlewares/middlewares');

router.get('/', controller.getAllPosts);
router.post('/', controller.create);
router.put('/:id', controller.updatePostById);
router.delete('/:id', controller.deletePostById);
router.get('/:id', controller.findPostById);

module.exports = router;