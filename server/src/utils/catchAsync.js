const  catchAsync = fn => (req,res,next)=>{
    Promise.resolve(fn(req,res)).catch(next)
}

module.exports = catchAsync