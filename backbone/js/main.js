//Namespace principal
Sfotipy = {};

//Model
Sfotipy.Song = Backbone.Model.extend({});

//Collection
Sfotipy.Songs = Backbone.Collection.extend({
	model: Sfotipy.Song
});


//View
Sfotipy.SongView = Backbone.View.extend({
	events: {
		'click .action.icon-add': 'add'
	},

	tagName: 'li',

	className: 'item border-bottom',

	template:  Handlebars.compile($("#song-template").html()),

	initialize: function(){
		this.listenTo(this.model, 'change', this.render, this);
	},

	render: function(){
		var song = this.model;		
		var html = this.template(song.toJSON());
		this.$el.html(html);
	},

	add: function(e){
		alert(this.model.get("name"));
	}
});

//Routes
Sfotipy.Router = Backbone.Router.extend({
	routes:{
		"": "index",
		"album/:name": "album",
		"profile/:username" : "profile"
	},
	index : function(){
		console.log("Estoy en el index");
	},
	album: function(name){
		console.log("Album:" + name);
	},
	profile: function(username){
		console.log("Username:" + username);
	}
});

Sfotipy.app = new Sfotipy.Router();
Backbone.history.start();

window.Sfotipy = Sfotipy;



