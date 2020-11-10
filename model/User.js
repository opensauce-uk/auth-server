const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 32
	},
	username: {
		type: String,
		required: true,
		max: 32
	},
	email: {
		type: String,
		required: true,
		max: 64
	},
	password: {
		type: String,
		required: true,
		max: 1024
	},
	created_at: {
		type: Number,
		required: true
	},
	favorites: {
		type: Object,
		max: 32
	},
	profilepicture: {
		type: String,
		default: 'https://cdn.opensauce.uk/assets/global/Account.png',
		max: 64
	},
	biography: {
		type: String,
		default: 'Hello World!',
		max: 1024
	},
	posts: {
		type: [Object]
	},
	permissions: {
		type: [String],
		default: ['ADD_COMMENT', 'EDIT_COMMENT', 'DELETE_COMMENT']
	}
});

module.exports = mongoose.model('User', userSchema);
