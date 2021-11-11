var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Philosofesia:xQO9mODCrC0qthSj@cluster0.recta.mongodb.net/Cluster0?retryWrites=true&w=majority');



export var Schema = mongoose.Schema;

export var commentSchema = new Schema({
    comment: String
});

export var comment = mongoose.model('comment', commentSchema);

var comment1 = comment({
    comment: 'Test comment.'
});

comment1.save(function(err: any) {
    if (err) throw err;
    console.log('comment saved!');
});

