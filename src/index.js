import Router from './router'

const router = new Router()
console.log("in indexjs");
router.listen(process.env.PORT || 8008, function(){
  console.log('listening on', router.address().port);
});