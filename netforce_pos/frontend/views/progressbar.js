var ProgressbarView=Backbone.View.extend({
    template: Handlebars.templates.progressbar,
    className: "modal",
    events: {
    },

    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.content=options.content;
    },

    render: function(cb) {
        console.log("ProgressbarView.render");
        var that=this;
        var data={
            'content': that.content,
        };
        var html=that.template(data);
        that.$el.html(html);
    },
});
