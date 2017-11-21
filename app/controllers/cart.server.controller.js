exports.render = (req, res) => {
    var Product = require('mongoose').model('Product');
    if (req.session && req.session.product){
        console.log('before'+req.session.product)
    var iddata = req.session.product;
    var data = [];
    for (let i = 0; i < iddata.length; i++) {
        Product.findOne({ '_id': iddata[i] }, (err, product) => {
            if (err) return handleError(err);
            else {
                data.push(product);
            }
            if (i === (iddata.length - 1)) {
                res.render('../views/cart', {
                    data: data
                });
            }
        })
    }}
    else  res.render('../views/cart');
};
exports.update=(req,res)=>{
    
    req.session.product=req.body.product;
    req.session.save( function(err) {
        req.session.reload( function (err) {
        });
    });
    console.log("after"+req.session.product);
}
