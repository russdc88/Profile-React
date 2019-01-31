


module.exports = {

	getList:  function(req,res){

		let list = ["item1", "item2", "item3"]
    res.json(list)
    console.log('Sent list of items')
	}
	

}





