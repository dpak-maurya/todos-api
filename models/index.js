var mongoose=require('mongoose');
mongoose.set('debug',true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://dpak:%40dpaknitw@cluster0-nql1y.mongodb.net/todo-api?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true");

mongoose.Promise=Promise;
module.exports.Todo=require("./todo");
