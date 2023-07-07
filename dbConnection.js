const mongoose= require('mongoose');

function dsConnect() {
    mongoose.connect("mongodb+srv://evgenijbrukin:rhPffRGtYVcTDPBC@cluster0.nfosetm.mongodb.net/", {useNewUrlParser: true})
        .then(() => console.log('Connected'))
        .catch((err) => console.log(err))
}

mongoose.set('strictQuery', false);

module.exports = dsConnect;


//mongodb+srv://evgenijbrukin:rhPffRGtYVcTDPBC@cluster0.nfosetm.mongodb.net/