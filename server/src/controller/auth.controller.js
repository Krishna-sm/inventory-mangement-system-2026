const { registerService, profileService, loginService } = require("../service/auth.service")
const catchAsync = require("../utils/catchAsync")

const loginController =catchAsync(async(req,res)=>{
    const res_obj =  await loginService(req.body)
   res.json(res_obj)
})

const registerController = catchAsync(async(req,res)=>{
    const res_obj =  await registerService(req.body)
   res.json(res_obj)
})

const  profileController= catchAsync(async(req,res)=>{
    const res_obj = await profileService(req.user)
    res.json(res_obj)
})
 
module.exports  = {
    loginController,
    registerController,
    profileController
}