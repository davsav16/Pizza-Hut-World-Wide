const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

//remove reply
router.route('/pizzId/commentId/replyId').delete(removeReply);

module.exports = router;
