var RetreiveSaleView=Backbone.View.extend({
    template: Handlebars.templates.retreive_sale,
    events: {
    },

    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.nf_model='pos.retreive.sale';
        this.hide_pb=false;
        this.flash=null;
    },

    render: function(cb) {
        console.log("RetreiveSale.render");
        var that=this;
        var args={
            'hide_pb' : that.hide_pb,
        };
        var options={};
        rpc_execute(that.nf_model,"get_retreive_sale",[args],options,function(err,res){ 
            if(err){
                alert("ERROR "+err['message']);
            }else{
                var data={
                };
                var html=that.template(data);
                that.$el.html(html);
                that.hide_pb=false;
                that.flash=null;
            }
        });
    },
});
